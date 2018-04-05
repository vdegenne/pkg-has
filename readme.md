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

**installation**
```yarn add pkg-has```

## Command-line Usage

```yarn global add pkg-has```

```bash
pkghas
You can exhaust the command from anywhere place in the project

it will test against the `package.json` based on the current position, so if you are in a directory of your project it will test with your `package.json` as you would expect. But now if you are in a dependency directory structure (e.g. `./node_modules/chai`), it will test against this dependency `package.json`. So beware.
