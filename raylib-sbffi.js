import { getNativeFunction, getBufferPointer } from 'sbffi'

// make a buffer & pointer from string
const str = value => getBufferPointer(Buffer.from(value))

// these are RGBA hex numbers
const LIGHTGRAY = 0xc8c8c8ff
const GRAY = 0x828282ff
const DARKGRAY = 0x505050ff
const YELLOW = 0xfdf900ff
const GOLD = 0xffcb00ff
const ORANGE = 0xffa100ff
const PINK = 0xff6dc2ff
const RED = 0xe62937ff
const MAROON = 0xbe2137ff
const GREEN = 0x00e430ff
const LIME = 0x009e2fff
const DARKGREEN = 0x00752cff
const SKYBLUE = 0x66bfffff
const BLUE = 0x0079f1ff
const DARKBLUE = 0x0052acff
const PURPLE = 0xc87affff
const VIOLET = 0x873cbeff
const DARKPURPLE = 0x701f7eff
const BEIGE = 0xd3b083ff
const BROWN = 0x7f6a4fff
const DARKBROWN = 0x4c3f2fff
const WHITE = 0xffffffff
const BLACK = 0x000000ff
const BLANK = 0x00000000
const MAGENTA = 0xff00ffff
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

// const texBunny = LoadTexture(str('resources/wabbit_alpha.png'))

InitWindow(800, 450, str('raylib [textures] example - bunnymark'))
while(!WindowShouldClose()) {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawFPS(10, 10)
  EndDrawing()
}

CloseWindow()