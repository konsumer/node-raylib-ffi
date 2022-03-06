This is a proof-of-concept to see how raylib performs loaded through FFI in node.

To run it, you will need raylib dll in project dir:

### mac

```sh
# packaging seems messed up for sbffi, so I did this to get it installed
npm i -g cmake-js
npm i -g premake
npm i sbffi

npm i
brew install raylib
cp /opt/homebrew/Cellar/raylib/4.0.0/lib/libraylib.4.0.0.dylib libraylib.dylib

# plain ffi-napi with structs
node bunnymark.js ffi

# test with sbffi
node bunnymark.js sbffi
```
