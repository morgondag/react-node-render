const React = require('react')
const ReactDOMServer = require('react-dom/server')
require("babel-core/register")

module.exports = (filename, options, static) => {
	try {
		const reactElement = React.createElement(require('./'+filename).component, options)
	} catch(e){
		return e
	}
	try {
		if(static){
			return ReactDOMServer.renderToStaticMarkup(reactElement)
		}
		return ReactDOMServer.renderToString(reactElement);
	} catch(e){
		return e
	}
}
