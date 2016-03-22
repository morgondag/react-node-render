![Travis][travis]
[![NPM version][npm-image]][npm-url]
[![Coverage Status](https://coveralls.io/repos/github/morgondag/react-node-render/badge.svg?branch=master)](https://coveralls.io/github/morgondag/react-node-render?branch=master)

# react-node-render
Simply render React components in Node.js

### Node_module
```npm install react-node-render --save```
```js
const render = require('react-node-render')
const html = render('myComponent.jsx')
console.log(html)
```

### With options
```js
const html = render('myComponent.jsx', {initialCount:42})
```

### Render to static
```js
const html = render('myComponent.jsx', {initialCount:42},true)
```

### Cli
**Install:**

```npm install react-node-render -g```

**Use:**

```rnr myComponent.jsx```

*myComponent.html is now created*



### Input
```jsx
import React from 'react'

export class component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {count: props.initialCount}
	}
	render() {
		return (
			<div>
				hello {this.state.count}
			</div>
		)
	}
}
component.defaultProps = { initialCount: 1337 }

````
### Output


```html
<div data-reactid=".2c8ppxl2l1c" data-react-checksum="-143512554"><span data-reactid=".2c8ppxl2l1c.0">hello </span><span data-reactid=".2c8ppxl2l1c.1">1337</span></div>
```

or with static mode:

```html
<div>hello 1337</div>
```


#### notes
* render to jade
* render to hbs
* rendering with react-router
* more awesome tests
* deeper error handeling
* more cli features


Created mainly to shot out html for koa/express.js servers used together with a templating language.

[travis]: https://travis-ci.org/morgondag/react-node-render.svg?branch=master
[npm-image]: https://img.shields.io/npm/v/react-node-render.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-node-render



