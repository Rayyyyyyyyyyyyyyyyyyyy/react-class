# Visual Studio Code 中的 CRA 專案 ESLint 與 Prettier 設定方式

- 註: 以下 Create-React-App 簡稱為 CRA
- 註: 以下 Visual Studio Code 簡稱為 VS Code
- 註: [yarn](https://yarnpkg.com/) 需要額外安裝，Yarn 是 Facebook 提供的替代 npm 的工具，可以加速 node 模組的下載，推薦使用。

<!-- TOC -->

- [Visual Studio Code 中的 CRA 專案 ESLint 與 Prettier 設定方式](#visual-studio-code-中的-cra-專案-eslint-與-prettier-設定方式)
  - [CRA 專案部份](#cra-專案部份)
    - [第 1 步: 建立新的專案](#第-1-步-建立新的專案)
    - [第 2 步: 安裝 ESLint 與 Prettier 模組](#第-2-步-安裝-eslint-與-prettier-模組)
    - [第 3 步: 加入 eslint 與 prettier 設定檔案](#第-3-步-加入-eslint-與-prettier-設定檔案)
  - [VS Code 開發工具部份](#vs-code-開發工具部份)
    - [第 1 步: 安裝 VS Code 中的 ESLint 與 Prettier 擴充](#第-1-步-安裝-vs-code-中的-eslint-與-prettier-擴充)
    - [第 2 步: 更新 VS Code 設定](#第-2-步-更新-vs-code-設定)

<!-- /TOC -->

## CRA 專案部份

### 第 1 步: 建立新的專案

```sh
create-react-app myapp
```

或

```sh
npx create-react-app my-app
```

### 第 2 步: 安裝 ESLint 與 Prettier 模組

在終端機裡，對應專案的根目錄，輸入以下的指令:

yarn 使用:

```sh
yarn add eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

npm 使用:

```sh
npm install --save-dev eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### 第 3 步: 加入 eslint 與 prettier 設定檔案

下載 `.eslintrc` 與 `.prettierrc` 與 `.eslintignore` 的設定檔，拷貝到專案的根目錄。

---

## VS Code 開發工具部份

### 第 1 步: 安裝 VS Code 中的 ESLint 與 Prettier 擴充

安裝以下兩個 VS Code 擴充 (使用擴充套件搜尋名稱即可，安裝下載量最多的。):

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 第 2 步: 更新 VS Code 設定

請將以下的設定加到你的 VSCode 使用者設定之中(選單->喜好設定)：

```json
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "prettier.disableLanguages": [
        "js"
    ],
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```

# SASS/SCSS - CRA(create-react-app)+Bootstrap4 SCSS 搭配使用

## 第一部份：CRA 加入 SASS(SCSS)導入支援

### 步驟 1. 安裝 node-sass

```
# using npm
npm install node-sass@4.14.1 --save

# using yarn
yarn add node-sass@4.14.1
```

> `yarn remove node-sass` 移除目前的套件

### 步驟 2. 更改 .css 檔案為 .scss

### 步驟 3. 更改所有導入(import)樣式部份使用 .scss

```js
import './index.scss'
```

> 註：需要 yarn start 重啟 react 開發伺服器

> 參考：https://create-react-app.dev/docs/adding-a-sass-stylesheet/

## 第二部份：CRA 加入 Bootstrap4 SCSS 檔案與導入

### 安裝 bootstrap 的 npm 模組

```sh
yarn add bootstrap

// use npm
npm install --save bootstrap
```

### 全站使用樣式 `index.scss`

> 在`src`目錄

```scss
// 其它自訂樣式
@import './styles/custom.scss';

// 全站都會使用的共同樣式
html {
  font-size: 12px;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
```

### 自訂樣式 `custom.scss`

建立一個`styles`資料夾，裡面建一個新檔案`custom.scss`

> 在`src/styles`目錄

全部導入的情況：

```scss
// 導入bootstrap所有的樣式與預設變數
@import '~bootstrap/scss/bootstrap.scss';

// 其它要導入覆蓋掉原本的預設bootstrap樣式要放在這下面
```

部份導入的情況：

```scss
@import './variables.scss';
@import '~bootstrap/scss/root';
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/tables';
@import '~bootstrap/scss/type';
// @import "~bootstrap/scss/images";
// @import "~bootstrap/scss/code";
@import '~bootstrap/scss/grid';
@import '~bootstrap/scss/forms';
@import '~bootstrap/scss/buttons';
// @import "~bootstrap/scss/transitions";
@import '~bootstrap/scss/dropdown';
// @import "~bootstrap/scss/button-group";
// @import "~bootstrap/scss/input-group";
// @import "~bootstrap/scss/custom-forms";
// @import "~bootstrap/scss/nav";
// @import "~bootstrap/scss/navbar";
@import '~bootstrap/scss/breadcrumb';
// @import "~bootstrap/scss/card";
// @import "~bootstrap/scss/pagination";
@import '~bootstrap/scss/badge';
// @import "~bootstrap/scss/jumbotron";
// @import "~bootstrap/scss/alert";
// @import "~bootstrap/scss/progress";
// @import "~bootstrap/scss/media";
// @import "~bootstrap/scss/list-group";
// @import "~bootstrap/scss/close";
@import '~bootstrap/scss/modal';
// @import '~bootstrap/scss/tooltip';
// @import '~bootstrap/scss/popover';
// @import '~bootstrap/scss/carousel';
// @import '~bootstrap/scss/utilities';
// @import "~bootstrap/scss/print";

// 其它要導入覆蓋掉原本的預設bootstrap樣式要放在這下面
// Any other imports should go below so that CSS from your
// components takes precedence over default bootstrap styles
```

### 覆蓋預設變數 \_variables.scss

在 Bootstrap 4 中只要是有包含`!default`標記的 Sass 變數是可以覆蓋的，並不需要更改到 Bootstrap 的原始檔案。

複製然後貼上需要的變數，然後修改它們的值，以及移除掉`!default`標記。

變數覆蓋需要在導入 Bootstrap 的 Sass 檔案之前。

> 在`src/styles`目錄

```scss
// 變數覆蓋需要在導入Bootstrap的Sass檔案之前
// 參考Bootstrap的 _variables.scss
$primary: rgb(148, 36, 240);
$secondary: rgba(10, 10, 10, 0.842);

// 導入Bootstrap所有的樣式與預設變數
@import '~bootstrap/scss/bootstrap.scss';

// 其它要導入覆蓋掉原本的預設Bootstrap樣式要放在這下面
// .alert-primary {
//   color: #020c16;
//   background-color: #5e94ce;
//   border-color: #b8daff;
// }
```
