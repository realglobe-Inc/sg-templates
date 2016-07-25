#!/usr/bin/env node

/**
 * Example usage
 */

'use strict'

const pkg = require('../package.json')
const { moduleIndex } = require('sg-templates')

// Define coz bud
module.exports = {
  force: true,
  mode: '444',
  tmpl: moduleIndex,
  data: {
    name: 'MyModule',
    pkg
  }
}

if (!module.parent) {
  require('coz').render(__filename)
}
