// this is a handmade minimal ffi wrapper that just has what is needed for demo
// it just uses regular ffi-napi stuff

import ref from 'ref-napi'
import sdi from 'ref-struct-di'
import ffi from 'ffi-napi'

export * from './colors.js'

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

// these could be further wrapped, if needed, but right now I am just exposing them directly
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
  LoadTexture,
  DrawTexture
} = ffi.Library('libraylib', {
  'GetRandomValue': [ 'int', ['int', 'int'] ],
  'InitWindow': ['void', ['int', 'int', 'string']],
  'WindowShouldClose': ['bool', []],
  'BeginDrawing': ['void', []],
  'EndDrawing': ['void', []],
  'ClearBackground': ['void', ['uint'] ],
  'DrawFPS': ['void', ['int', 'int']],
  'CloseWindow': ['void', []],
  'GetFPS': ['int', []],
  'LoadTexture': [Texture, ['string']],
  'DrawTexture': ['void', [Texture, 'int', 'int', 'uint']]
})

