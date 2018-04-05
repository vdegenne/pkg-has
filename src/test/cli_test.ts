import {assert} from 'chai';
import intercept = require('intercept-stdout');
import {run as cliRun} from '../cli';

suite('cli', () => {
  async function runCli(...args: string[]) {
    const originalArgv = process.argv;
    process.argv = ['node', 'pkghas'].concat(args);
    let stdout = '';
    const unintercept = intercept((txt) => {
      stdout += txt;
      return '';
    });

    try {
      await cliRun();
    } finally {
      unintercept();
      process.argv = originalArgv;
    }

    return stdout;
  };

  test('The cli returns the expected output', async() => {
    const stdout = await runCli('command');
    assert.match(stdout, /command-line-args/);
    assert.match(stdout, /command-line-usage/);
  });
});
