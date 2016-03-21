'use strict'
const assert = require('assert')

const render = require('./../index.js')

describe('render() should work!', () => {
  it('should throw error with missing file', () => {
    let haveError = false
    try {
      render('void.jsx')
    } catch(e) {
      haveError = true
    }
    assert.equal(haveError, true)
  })

  it('render jsx file should return a html string', () => {
    assert.equal(typeof render('./test/test-component.jsx'), 'string')
  })

  it('render jsx file should return with react-ids', () => {
    assert.equal(render('./test/test-component.jsx').indexOf('data-reactid='), 5)
  })

  it('render with options && isStatic should return expected html', () => {
    assert.equal(render('./test/test-component.jsx', {initialCount: 42}, true), '<div>hello 42</div>')
  })
})
