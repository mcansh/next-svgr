# @mcansh/next-svgr

Use [@svgr/webpack](https://github.com/gregberge/svgr/tree/master/packages/webpack) with [Next.js](https://github.com/vercel/next.js)

## Installation

```
npm install @mcansh/next-svgr
```

or

```
yarn add @mcansh/next-svgr
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withSVG = require("@mcansh/next-svgr")();
module.exports = withSVG();
```

Optionally you can provide [options](https://github.com/gregberge/svgr/tree/master/packages/webpack#passing-options):

```js
// next.config.js
const withSVG = require("@mcansh/next-svgr")({
  options: {
    native: true,
    svgoConfig: {
      removeViewBox: true,
    },
  },
});
module.exports = withSVG();
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withSVG = require("@mcansh/next-svgr")();
module.exports = withSVG({
  webpack(config, options) {
    return config;
  },
});
```
