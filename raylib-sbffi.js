import { getNativeFunction, getBufferPointer } from 'sbffi'

// make a buffer & pointer from string
const str = value => getBufferPointer(Buffer.from(value))

// these are RGBA hex numbers
const WHITE = 0xffffffff
const RAYWHITE = 0xf5f5f5ff

const libPath = 'libraylib.dylib' 
export const GetRandomValue = getNativeFunction(libPath, 'GetRandomValue', 'int', ['int', 'int'])
export const InitWindow = getNativeFunction(libPath, 'InitWindow', 'void', ['int', 'int', 'pointer'])
export const WindowShouldClose = getNativeFunction(libPath, 'WindowShouldClose', 'int', [])
export const BeginDrawing = getNativeFunction(libPath, 'BeginDrawing', 'void', [])
export const EndDrawing = getNativeFunction(libPath, 'EndDrawing', 'void', [])
export const ClearBackground = getNativeFunction(libPath, 'ClearBackground', 'void', ['unsigned int'])
export const DrawFPS = getNativeFunction(libPath, 'DrawFPS', 'void', ['int', 'int'])
export const CloseWindow = getNativeFunction(libPath, 'CloseWindow', 'void', [])
export const GetFPS = getNativeFunction(libPath, 'GetFPS', 'int', [])
export const LoadTexture = getNativeFunction(libPath, 'LoadTexture', 'pointer', ['pointer'])
export const DrawTexture = getNativeFunction(libPath, 'DrawTexture', 'void', ['pointer', 'int', 'int', 'unsigned int'])

InitWindow(800, 450, str('raylib [textures] example - bunnymark'))

// not sure why this crashes
const texBunny = LoadTexture(str('resources/wabbit_alpha.png'))

const bunnies = []

while(!WindowShouldClose()) {
  if (GetFPS() > 60) {
    for (let i = 0; i < 10; i++) {
      bunnies.push([GetRandomValue(0, 800), GetRandomValue(0, 450)])
    }
  }

  BeginDrawing()
  ClearBackground(RAYWHITE)
  bunnies.forEach(([x, y]) => {
    DrawTexture(texBunny, x, y, WHITE)
  })
  DrawFPS(10, 10)
  EndDrawing()
}

console.log(bunnies.length, 'bunnies')

CloseWindow()