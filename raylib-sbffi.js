import { getNativeFunction, getBufferPointer } from 'sbffi'

// make a buffer & pointer from string
const str = value => getBufferPointer(Buffer.from(value))

const libPath = 'libraylib.dylib'

// handle strings as pointers
const _LoadTexture = getNativeFunction(libPath, 'LoadTexture', 'pointer', ['pointer'])
export const LoadTexture = f => _LoadTexture(str(f))

const _InitWindow = getNativeFunction(libPath, 'InitWindow', 'void', ['int', 'int', 'pointer'])
export const InitWindow = (w, h, t) => _InitWindow(w, h, str(t))

export const GetRandomValue = getNativeFunction(libPath, 'GetRandomValue', 'int', ['int', 'int'])
export const WindowShouldClose = getNativeFunction(libPath, 'WindowShouldClose', 'int', [])
export const BeginDrawing = getNativeFunction(libPath, 'BeginDrawing', 'void', [])
export const EndDrawing = getNativeFunction(libPath, 'EndDrawing', 'void', [])
export const ClearBackground = getNativeFunction(libPath, 'ClearBackground', 'void', ['unsigned int'])
export const DrawFPS = getNativeFunction(libPath, 'DrawFPS', 'void', ['int', 'int'])
export const CloseWindow = getNativeFunction(libPath, 'CloseWindow', 'void', [])
export const GetFPS = getNativeFunction(libPath, 'GetFPS', 'int', [])
export const DrawTexture = getNativeFunction(libPath, 'DrawTexture', 'void', ['pointer', 'int', 'int', 'unsigned int'])

