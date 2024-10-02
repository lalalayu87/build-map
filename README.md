# build-map
옆집 꺼보다 더 업그레이드된 지도 만들기


# Expo 앱 설치 및 시작 가이드
이 가이드는 Expo 프로젝트를 설정하고 실행하는 방법을 설명합니다.


## 사전 요구 사항
- Node.js 설치가 필요합니다. [Node.js 설치하기](https://nodejs.org/)
- npm 또는 yarn이 설치되어 있어야 합니다.
- 실제 장치에 [Expo Go](https://expo.dev/go)를 설치합니다.


## Expo CLI 설치
먼저 Expo CLI를 전역(global)으로 설치합니다.

```bash
npm install --global expo-cli
```


## Expo 앱 초기화
 - 아래 명령어를 사용하여 새 Expo 앱을 생성합니다. 앱이름은 원하는 이름으로 대체하세요.

```bash
npx create-expo-app 앱이름 --template blank 
cd 앱이름
```


## 종속성 설치
- Expo CLI가 실행되면 웹, iOS 또는 Android 시뮬레이터에서 앱을 실행할 수 있습니다.

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```


## 모바일과 웹에서 앱 실행
```bash
npx expo start
```


