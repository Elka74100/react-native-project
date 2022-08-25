# About the project 
It is a simple "article posting" project

# Built with 
- React Native
- Redux Toolkit with RTK Query

# Prerequisites (macOS)
The list of softwares you should install:
- Homebrew  
- NodeJS
- Watchman
- Xcode
- Android Studio
- Cocoapods
- Json Server (to run the fake backend)

# Installation (iOS)
```sh
npm i
```
```sh
npm run pod
```

# Run the fake backend
```sh
cd data
```
```sh
npx json-server --watch --delay 1000 db.json
```

# Run the application
## iOS
```sh
npm run ios
```

## Android
Replace in the apiSlice.ts file the 'http://localhost:3000' by 'http://10.0.2.2:3000'

```sh
npm run android
```

# Debug the  React component hierarchy
## Install react-devtools
```sh
npm install -g react-devtools
```
## Run the devtools
```sh
react-devtools
```
## Open the debugging panel (iOS emulator)
Cmd + Ctrl + D in the emulator

