/**
 * Test case for templates.
 * Runs with mocha.
 */
'use strict'

const Templates = require('../lib/templates.js')
const assert = require('assert')
const co = require('co')
const coz = require('coz')

describe('templates', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Templates', () => co(function * () {
    yield coz.render({
      tmpl: Templates.moduleIndex,
      force: true,
      mkdirp: true,
      mode: '444',
      path: `${__dirname}/../tmp/testing-templates/index.js`,
      data: {
        pkg: {
          name: 'hoge'
        },
        name: 'Fuge',
        sub: {
          foo: './foo'
        }
      }
    })

    yield coz.render({
      tmpl: Templates.reactTest,
      force: true,
      mkdirp: true,
      mode: '444',
      path: `${__dirname}/../tmp/testing-react-test/hoge_test.jsx`,
      data: {
        name: 'Hoge'
      }
    })
  }))
})

/* global describe, before, after, it */
