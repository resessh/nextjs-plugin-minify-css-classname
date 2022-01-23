# nextjs-plugin-minify-css-classname
<!-- <a href="https://www.npmjs.com/package/nextjs-plugin-minify-css-classname"><img src="https://img.shields.io/npm/v/nextjs-plugin-minify-css-classname.svg" alt="version"></a> -->
<!-- <img src="https://github.com/resessh/nextjs-plugin-minify-css-classname/workflows/Build/badge.svg" alt="Build" /> -->
<!-- <img src="https://github.com/resessh/nextjs-plugin-minify-css-classname/workflows/Test/badge.svg" alt="Test" /> -->
<!-- <a href="https://codecov.io/gh/resessh/nextjs-plugin-minify-css-classname"><img src="https://codecov.io/gh/resessh/nextjs-plugin-minify-css-classname/branch/master/graph/badge.svg" alt="codecov" /></a> -->
<a href="https://www.typescriptlang.org/docs/home.html"><img src="https://camo.githubusercontent.com/832d01092b0e822178475741271b049a2e27df13/68747470733a2f2f62616467656e2e6e65742f62616467652f2d2f547970655363726970742f626c75653f69636f6e3d74797065736372697074266c6162656c" alt="typescript" /></a>

A Next.js plugin to minify css classnames. No any external dependencies.

:construction: __Before__
```html
<main class="App_content_g9yLL">
  <p class="Message_message_7VBcg">hello,
    <span class="Message_strong_kQiZl">world!</span>
  </p>
</main>
```

:sparkles: __after__
```html
<main class="a">
  <p class="b">hello,
    <span class="c">world!</span>
  </p>
</main>
```

## :electric_plug: Installation
```shell
$ npm install -D nextjs-plugin-minify-css-classname
```
or
```shell
$ yarn add -D nextjs-plugin-minify-css-classname
```

## :surfer: Usage
__next.config.js__
```js
const withMinifyClassname = require('nextjs-plugin-minify-css-classname')({
  enabled: process.env.NODE_ENV === 'production',
});

module.exports = withMinifyClassname({
  // other configs
})
```

## :checkered_flag: LICENSE
MIT
