#!/usr/bin/env node

'use strict'
const fs = require('fs')
const render = require('./index.js')
const path = require('path')
const pkg = require('./package.json');

if(process.argv[2] === '-v'){
    console.log('version', pkg.version)
    return;
}

if(typeof process.argv[2] === 'undefined'){
	console.log('no file')
	return
}

let filepath = path.join(process.cwd(), process.argv[2])

const checkAccess = function(path){
	return new Promise((resolve,reject)=>{
		fs.access(path, fs.R_OK, (err, s) => {
			if(err){
				reject("unable to access file" + process.argv[2])
				return
			}
			resolve()
		})
	})
}

const output = function(html,path) {
    var out = fs.createWriteStream(path, {
        flags: "w",
        encoding: "utf8",
        mode: parseInt('0644',8)
    })
    out.write(html)
    out.end()
}

checkAccess(filepath).then(()=>{
	var htmlPath = process.argv[2].replace('jsx','html')
	output(render(filepath),htmlPath)
	console.log('\n'+'Successfully created: '+htmlPath+'\n')
},(err)=>{
	console.log(err)
})
