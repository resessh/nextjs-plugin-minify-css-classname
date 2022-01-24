## [0.0.4](https://github.com/resessh/nextjs-plugin-minify-css-classname/compare/v0.0.3...v0.0.4) (2022-01-24)


### Features

* re-design plugin interfaces ([#20](https://github.com/resessh/nextjs-plugin-minify-css-classname/issues/20)) ([050f80d](https://github.com/resessh/nextjs-plugin-minify-css-classname/commit/050f80d0cec9231d6323154a75a502ab78089e84))


### BREAKING CHANGES

* Re-designed plugin interfaces to avoid default export for typings.



# [0.0.3](https://github.com/resessh/nextjs-plugin-minify-css-classname/compare/v0.0.2...v0.0.3) (2022-01-24)


### Bug Fixes

* fix not working on production ([a57afd2](https://github.com/resessh/nextjs-plugin-minify-css-classname/commit/a57afd20a8fc940d8a585422a75363f07f42e75f))


### BREAKING CHANGES

* The plugin config is now required. Please refer the README.



# [0.0.2](https://github.com/resessh/nextjs-plugin-minify-css-classname/compare/v0.0.1...v0.0.2) (2022-01-23)


### Features

* make plugin interface easier to use ([2f9ecf2](https://github.com/resessh/nextjs-plugin-minify-css-classname/commit/2f9ecf2edb0ddcc43ba9082b360f3df42bb139a2))


### BREAKING CHANGES

* If you have an empty function call like `const withMinifyClassnames =
require('nextjs-plugin-minify-css-classname')()`, now you should remove the empty function call.



