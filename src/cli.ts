/// <reference path="../custom_typings/command-line-args.d.ts" />
import * as colors from 'colors';
import * as commandLineArgs from 'command-line-args';
import {ArgDescriptor} from 'command-line-args';
import * as commandLineUsage from 'command-line-usage';

import {args} from './args';
import {pkgHas} from './pkg-has';

colors.green('');

export async function run() {
  const argsWithHelp: ArgDescriptor[] = args.concat(
      {name: 'help', description: 'Shows this help message', type: Boolean});

  let cliOptions: any;

  try {
    cliOptions = commandLineArgs(args);
  } catch (e) {
    printUsage(argsWithHelp);
    return;
  }

  if (cliOptions.help) {
    printUsage(argsWithHelp);
    return;
  }

  /**
   * Start your program HERE
   */
  if (!cliOptions.package) {
    printUsage(argsWithHelp);
    return;
  }

  if (pkgHas(cliOptions.package)) {
    console.log('YES'.green);
  } else {
    const packages: string[] = pkgHas.wideSearch(cliOptions.package);

    if (packages.length) {
      let p;
      for (p of packages) {
        console.log(p.green);
      }
    } else {
      // no result
      console.log('NO'.red);
    }
  }
}



function printUsage(options: any): void {
  const usage = [
    {header: 'Usage', content: 'pkghas <package-name>'},
    {header: 'Options', optionList: options}
  ];
  console.log(commandLineUsage(usage));
}
