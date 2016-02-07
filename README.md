# cordova-plugin-cs-disable-bitcode

> [Cordova plugin](https://github.com/csantanapr/cordova-plugin-cs-disable-bitcode) to disable bitcode in iOS build settings.

> Why this plugin ?
Bitcode is not supported in every Cordova plugins and if you're using one of these, you will get something like the following error :
```
You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE), obtain
an updated library from the vendor, or disable bitcode for this target.
for architecture arm64 clang: error: linker command failed with exit code 1
```

> :warning: It's not a solution to disable this setting but a workaround waiting for all your plugins updates.

## Installation

Using cordova CLI
```
cordova plugin add https://github.com/csantanapr/cordova-plugin-cs-disable-bitcode
```

## License

Apache-2.0 © [Carlos Santana](http://twitter.com/alexiskofman)

## Credits
This plugin it was inspired by [cordova-plugin-disable-bitcode](https://www.npmjs.com/package/cordova-plugin-disable-bitcode)
