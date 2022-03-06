This is a proof-of-concept to see how raylib performs loaded through FFI in node.

To run it, you will need raylib dll in project dir:

### mac

```sh
npm i
brew install raylib
cp /opt/homebrew/Cellar/raylib/4.0.0/lib/libraylib.4.0.0.dylib libraylib.dylib

# packaging seems messed up for sbffi, so I did this
npm i -g cmake-js
npm i -g premake
npm i sbffi

# run different demos

# plain ffi-napi with structs
node raylib-ffi-napi.js

# sbffi with structs
node raylib-sbffi.js

```
