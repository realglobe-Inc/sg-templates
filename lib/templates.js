/**
 * Template paths
 * @module Templates
 */

'use strict'

const path = require('path')

let resolve = (filename) => path.resolve(__dirname, '..', filename)

exports.moduleIndex = resolve('assets/module-index.js.hbs')
