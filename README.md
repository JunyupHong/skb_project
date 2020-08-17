# skb_project

## Promise를 이용한 Vue.js Modal Component

### 2020 SK Broadband Internship Project

#### 기간

-   2020.07.13 ~ 2020.08.28

#### 기술스택

-   Vue.js
-   HTML
-   SCSS
-   TypeScript
-   ESLint

## Project setup

`npm install`

### Compiles and hot-reloads for development

`npm run serve`

### Compiles and minifies for production

`npm run build`

### Run your unit tests

`npm run test:unit`

### Lints and fixes files

`npm run lint`

## Type

```
export type SizeType = 'normal' | 'small' | 'big' | 'full';
export type AlignType = 'center' | 'left';
export interface UIOptionType {
    size?: SizeType;
    align?: AlignType;
    negativeMessage?: string;
    positiveMessage?: string;
}
```

## Usage

### Modal

```
const uiOption: UIOptionType = {
    size: 'normal', // default: normal
    align: 'center', // default: center
    positiveMessage: '확인', //default: 확인
    negativeMessage: '취소',
};
const content: string = 'DESCRIPTION';
const title: string = 'TITLE';

this.$modal.on(uiOption, content, title);
```

### PromiseModal

```
const uiOption: UIOptionType = {
    size: 'normal', // default: normal
    align: 'center', // default: center
    positiveMessage: '확인', //default: 확인
    negativeMessage: '취소',
};
const content: string = 'DESCRIPTION';
const title: string = 'TITLE';

try {
    await this.$promiseModal.on(uiOption, content, title);
    // resolve - click positive message button
} catch (e) {
    // reject - click negative message button
}
```

### MultiPromiseModal

```
const uiOption: UIOptionType = {
    size: 'normal', // default: normal
    align: 'center', // default: center
    positiveMessage: '확인', //default: 확인
    negativeMessage: '취소',
};
const content: string = 'DESCRIPTION';
const title: string = 'TITLE';
const buttons: string[] = ['1', '2', '3'];

try {
    const idx = await this.$promiseModal.on(uiOption, content, title, buttons);
    // resolve - click positive message button

    // idx: index of clicked button
    switch (idx) {
        case 0: // do 1
            break;
        case 1: // do 2
            break;
        case 2: // do 3
            break;
        default: // do else
    }
} catch (e) {
    // reject - click negative message button
}
```
