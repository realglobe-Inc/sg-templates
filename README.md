sg-templates
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-templates
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-templates
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-templates.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-templates
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-templates.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sg-templates/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-templates
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-templates.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-templates.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-templates
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-templates.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-templates
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-templates.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Templates for SUGOS

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sg-templates --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Templates.md.hbs" Start -->

<a name="section-doc-guides-03-templates-md"></a>

Templates
---------

| Name | Path |
| --- | --- |
| moduleIndex | [assets/module-index.js.hbs](assets/module-index.js.hbs) |


<!-- Section from "doc/guides/03.Templates.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sg-templates/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos][sugos_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos

<!-- Links End -->