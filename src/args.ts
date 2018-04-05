// Those are examples of arguments you could write.
// Change the file to your convenience.


/// <reference path="../custom_typings/command-line-args.d.ts" />
import {ArgDescriptor} from 'command-line-args';

export const args: ArgDescriptor[] = [{
  name: 'package',
  description: 'The name of the package to test',
  type: String,
  defaultOption: true
}];
