#!/usr/bin/env node
'use strict'

const React = require('react')
const ReactDOMServer = require('react-dom/server')
require('babel-core/register')

module.exports = (file, options, isStatic) => {
  const reactElement = React.createElement(require(file).component, options)
  try {
    if (isStatic) {
      return ReactDOMServer.renderToStaticMarkup(reactElement)
    }
    return ReactDOMServer.renderToString(reactElement)
  } catch(e) {
    return e
  }
}
