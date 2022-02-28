// this is a handmade minimal ffi wrapper that just has what is needed for demo

import ref from 'ref-napi'
import sdi from 'ref-struct-di'
import ffi from 'ffi-napi'

const StructType = sdi(ref)

// BEGIN BINDINGS

export const Color = StructType({
  r: ref.types.uchar,
  g: ref.types.uchar,
  b: ref.types.uchar,
  a: ref.types.uchar
})

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

export const Texture2D = Texture

export const LIGHTGRAY = new Color({ r: 200, g: 200, b: 200, a: 255 }) // Light Gray
export const GRAY = new Color({ r: 130, g: 130, b: 130, a: 255 }) // Gray
export const DARKGRAY = new Color({ r: 80, g: 80, b: 80, a: 255 }) // Dark Gray
export const YELLOW = new Color({ r: 253, g: 249, b: 0, a: 255 }) // Yellow
export const GOLD = new Color({ r: 255, g: 203, b: 0, a: 255 }) // Gold
export const ORANGE = new Color({ r: 255, g: 161, b: 0, a: 255 }) // Orange
export const PINK = new Color({ r: 255, g: 109, b: 194, a: 255 }) // Pink
export const RED = new Color({ r: 230, g: 41, b: 55, a: 255 }) // Red
export const MAROON = new Color({ r: 190, g: 33, b: 55, a: 255 }) // Maroon
export const GREEN = new Color({ r: 0, g: 228, b: 48, a: 255 }) // Green
export const LIME = new Color({ r: 0, g: 158, b: 47, a: 255 }) // Lime
export const DARKGREEN = new Color({ r: 0, g: 117, b: 44, a: 255 }) // Dark Green
export const SKYBLUE = new Color({ r: 102, g: 191, b: 255, a: 255 }) // Sky Blue
export const BLUE = new Color({ r: 0, g: 121, b: 241, a: 255 }) // Blue
export const DARKBLUE = new Color({ r: 0, g: 82, b: 172, a: 255 }) // Dark Blue
export const PURPLE = new Color({ r: 200, g: 122, b: 255, a: 255 }) // Purple
export const VIOLET = new Color({ r: 135, g: 60, b: 190, a: 255 }) // Violet
export const DARKPURPLE = new Color({ r: 112, g: 31, b: 126, a: 255 }) // Dark Purple
export const BEIGE = new Color({ r: 211, g: 176, b: 131, a: 255 }) // Beige
export const BROWN = new Color({ r: 127, g: 106, b: 79, a: 255 }) // Brown
export const DARKBROWN = new Color({ r: 76, g: 63, b: 47, a: 255 }) // Dark Brown
export const WHITE = new Color({ r: 255, g: 255, b: 255, a: 255 }) // White
export const BLACK = new Color({ r: 0, g: 0, b: 0, a: 255 }) // Black
export const BLANK = new Color({ r: 0, g: 0, b: 0, a: 0 }) // Blank (Transparent)
export const MAGENTA = new Color({ r: 255, g: 0, b: 255, a: 255 }) // Magenta
export const RAYWHITE = (new Color({ r: 245, g: 245, b: 245, a: 255 })) // My own White (raylib logo)


// these could be further wrapped, if needed, but right now I am just exposing them directly
const r = ffi.Library('libraylib', {
  'GetRandomValue': [ 'int', ['int', 'int'] ],
  'InitWindow': ['void', ['int', 'int', 'string']],
  'WindowShouldClose': ['bool', []],
  'BeginDrawing': ['void', []],
  'EndDrawing': ['void', []],
  'ClearBackground': ['void', [Color] ],
  'DrawFPS': ['void', ['int', 'int']],
  'CloseWindow': ['void', []],
  'GetFPS': ['int', []],
  'LoadTexture': [Texture2D, ['string']]
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
