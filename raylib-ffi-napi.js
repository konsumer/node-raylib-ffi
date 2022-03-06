// this is a handmade minimal ffi wrapper that just has what is needed for demo
// it just uses regular ffi-napi stuff

import ref from 'ref-napi'
import sdi from 'ref-struct-di'
import ffi from 'ffi-napi'

const StructType = sdi(ref)

// BEGIN BINDINGS

export const Vector2 = StructType({
  x: ref.types.float,
  y: ref.types.float
})

export const Texture = StructType({
  id: ref.types.uchar,
  width: ref.types.int,
  height: ref.types.int,
  mipmaps: ref.types.int,
  format: ref.types.int
})

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


// these could be further wrapped, if needed, but right now I am just exposing them directly
const r = ffi.Library('libraylib', {
  'GetRandomValue': [ 'int', ['int', 'int'] ],
  'InitWindow': ['void', ['int', 'int', 'string']],
  'WindowShouldClose': ['bool', []],
  'BeginDrawing': ['void', []],
  'EndDrawing': ['void', []],
  'ClearBackground': ['void', ['uint'] ],
  'DrawFPS': ['void', ['int', 'int']],
  'CloseWindow': ['void', []],
  'GetFPS': ['int', []],
  'LoadTexture': [Texture, ['string']]
})

export const {
  GetRandomValue,
  InitWindow,
  WindowShouldClose,
  BeginDrawing,
  EndDrawing,
  ClearBackground,
  DrawFPS,
  CloseWindow,
  GetFPS,
  LoadTexture
} = r

// END BINDINGS

// this runs, and outputs correct name on C-side, but segfaults
// const texBunny = LoadTexture('resources/wabbit_alpha.png')

InitWindow(800, 450, 'raylib [textures] example - bunnymark')
while(!WindowShouldClose()) {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawFPS(10, 10)
  EndDrawing()
}

CloseWindow()
