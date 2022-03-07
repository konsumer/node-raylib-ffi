// pick the right lib, based on arg1 == sbffi
import * as f from './raylib-ffi.js'
import * as s from './raylib-sbffi.js'
import raylib from 'raylib'

const [,,type ] = process.argv
let r = f
if (type === 'sbffi') {
  r = s
}
if (type === 'napi') {
  r = raylib
}


const {
  InitWindow,
  LoadTexture,
  WindowShouldClose,
  GetFPS,
  GetRandomValue,
  BeginDrawing,
  ClearBackground,
  DrawTexture,
  DrawFPS,
  EndDrawing,
  CloseWindow,
  Color,
  RAYWHITE
} = r


InitWindow(800, 450, 'raylib [textures] example - bunnymark')

// not sure why this crashes on sbffi
const texBunny = LoadTexture('resources/wabbit_alpha.png')

const bunnies = []

while(!WindowShouldClose()) {
  if (GetFPS() > 60) {
    for (let i = 0; i < 10; i++) {
      bunnies.push([GetRandomValue(0, 800), GetRandomValue(0, 450), Color(GetRandomValue(50, 240), GetRandomValue(80, 240), GetRandomValue(100, 240))])
    }
  }

  BeginDrawing()
  ClearBackground(RAYWHITE)
  bunnies.forEach(([x, y, tint]) => {
    DrawTexture(texBunny, x, y, tint)
  })
  DrawFPS(10, 10)
  EndDrawing()
}

console.log(bunnies.length, 'bunnies')

CloseWindow()