[![Build Status](https://travis-ci.org/vdegenne/pkg-has.svg?branch=master)](https://travis-ci.org/vdegenne/pkg-has)

[![npm](https://img.shields.io/npm/v/pkg-has.svg)](https://www.npmjs.com/package/pkg-has)

# pkg-has

Just checking if package.json contains a given package.

## Usage

```javascript
does_my_project_have_mocha = require('pkg-has')('mocha');
```

or use a wide search

```javascript
const findings = require('pkg-has').wideSearch('cha');
// findings = ["mocha", "chai"]
```

**installation :** `yarn add pkg-has`

## Command-line Usage

```sudo yarn global add pkg-has```

<img src="https://github.com/vdegenne/pkg-has/blob/master/pkghas.png?raw=true"/>

## notes

it will test against the `package.json` based on the current position, so if you are in a directory of your project it will test with your `package.json` as you would expect. But now if you are in a dependency directory structure (e.g. `./node_modules/chai`), it will test against this dependency `package.json`. So beware.
