# Todo List App (React Native)

## App created based on the book "스무디 한 잔 마시며 끝내는 React Native"

- Made fourth react native application using react native CLI
- Learned about "Context", managing global variables
- >(Before Context Api, used Flux -> Redux, Mobx state managing libraries)
- Saved datas using AsyncStorage, which is used for saving Token after login, Caching informations, etc

## Installation (from init)
```bash
react-native init TodoList --template react-native-template-typescript
cd TodoList

npm install --save styled-components # --force
npm install --save-dev typescript @types/react @types/react-native 
npm install --save-dev @types/styled-components-react-native babel-plugin-root-import

npm install --save @react-native-async-storage/async-storage
```

## Usage
- Description for ios app simulation
```bash
git clone "https://github.com/sigma13-K/TodoList.git"

cd ./TodoList/ios
pod install  # for first installation (ios simulator)
cd ../
npm run ios
```
