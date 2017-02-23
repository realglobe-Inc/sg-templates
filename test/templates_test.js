/**
 * Test case for templates.
 * Runs with mocha.
 */
'use strict'

const Templates = require('../lib/templates.js')
const assert = require('assert')
const { snakecase } = require('stringcase')
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

    yield coz.render({
      tmpl: Templates.moduleApi,
      force: true,
      mkdirp: true,
      mode: '444',
      path: `${__dirname}/../tmp/testing-module-api-test/hoge_api.md`,
      data: {
        pkg: { name: 'hoge' },
        get signature () {
          const jsdoc = require('../misc/sample-jsdoc.json')
          const paramDesc = ({ parameters = [] }) => parameters
            .map((param) => param.name)
            .filter((name) => !/\./.test(name)).join(', ')
          const asClass = (item) => Object.assign({}, item, {
            functions: (item.functions || []).map((func) => Object.assign(func, {
              paramDesc: paramDesc(func)
            })),
            constructor: Object.assign(item.constructor, {
              paramDesc: paramDesc(item.constructor)
            }),
            instanceName: snakecase(item.name).split('_').pop()
          })
          const asFunc = (item) => Object.assign({}, item, {
            paramDesc: paramDesc(item)
          })
          const byName = (list, { wrapper = (item) => item }) => list.reduce((result, item) => Object.assign(result, {
            [item.name]: wrapper(item)
          }), {})
          let classes = byName(jsdoc[ 'classes' ], { wrapper: asClass })
          let { Driver } = classes

          let functions = byName(jsdoc[ 'functions' ], { wrapper: asFunc })
          let {
            create
          } = functions
          return {
            classes: [
              Driver
            ],
            functions: [
              create
            ]
          }
        }
      }
    })

  }))
})

/* global describe, before, after, it */
