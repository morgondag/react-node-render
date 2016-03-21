![Travis][travis]
[![NPM version][npm-image]][npm-url]
![Coverage Status][coveralls]

# react-node-render
Simply render React components in Node.js

### Node_module
```npm install react-node-render --save```
```js
const render = require('react-node-render')
const html = render('myComponent.jsx')
console.log(html)
```

### Cli
**Install:**
```npm install react-node-render -g```

**Use:**
```rnr myComponent.jsx```
*myComponent.html is now created*


[travis]: https://travis-ci.org/morgondag/react-node-render.svg?branch=master
[npm-image]: https://img.shields.io/npm/v/react-node-render.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-node-render
[coveralls]: https://coveralls.io/repos/github/morgondag/react-node-render/badge.svg?branch=master
