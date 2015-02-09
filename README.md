# IoTgo Android App

## Introduction

IoTgo Android App is a client app which is intended to be used with [IoTgo](http://iotgo.iteadstudio.com) or other IoTgo instances.

IoTgo Android App is developed using HTML5 and [Cordova](http://cordova.apache.org), and it is almost identical to IoTgo Web App bundled in [IoTgo Github repo](https://github.com/itead/IoTgo).

## Installation

### Prerequisite

- [Node.js](http://nodejs.org/): An asynchronous JavaScipt event driven framework, and yes, JavaScript on the server!
- [Bower](http://bower.io/): A package manager for the web, optimized for the front-end.
- [Cordova CLI](https://www.npmjs.com/package/cordova): The command line tool to build, deploy and manage Cordova-based applications.
- [Android SDK](http://developer.android.com/sdk/index.html)

### Build

Get IoTgo Android App source code from github.com

```
git clone https://github.com/itead/IoTgo_Android_App
```

Change directory to IoTgo Android App and install dependencies.

```
cd IoTgo_Android_App/www && bower install
```

Change directory back to IoTgo Android root and build apk

```
cd .. && cordova build android
```

The resulting apk which is named by `CordovaApp-debug.apk` is located at `IoTgo_Android_App/platforms/android/ant-build`.
