import {assert} from 'chai';
import * as logging from 'plylog';
import {pkgHas} from '../pkg-has';



suite('pkg-has', () => {

  test(`The project has no 'foo' dependency`, () => {
    assert(!pkgHas('foo'));
  });


  test(`This project has a dev ('resolve') dependency`, () => {
    assert(pkgHas('resolve'));
  });

  test(`This project has a devDep ('mocha') dependency`, () => {
    assert(pkgHas('mocha'));
  });

});


suite('pkg-has-wide-search', () => {

  test(`This project has 2 dependencies containing 'command'`, () => {

    const result: string[] = pkgHas.wideSearch('command');

    assert.equal(result.length, 2);
    assert.equal(result[0], 'command-line-args');
    assert.equal(result[1], 'command-line-usage');
  });

});
