"use strict"
const should = require("should");
const render = require('./../render.js')

describe("render should work", () => {
	it("should throw error with missing file", (done) => {
		let haveError = false;
		try{
			render('void.jsx').not.be.ok;
		} catch(e){
			haveError = true;
		}
		should.equal(haveError, true);
		done()
	})
	it("should return a html string", (done) => {
		should.equal(typeof render('app.jsx'), 'string')
		done()
	})
})
