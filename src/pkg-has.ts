import * as fs from 'fs';
import * as path from 'path';
import * as logging from 'plylog';
import * as resolve from 'resolve';

export {args} from './args';

const logger = logging.getLogger('pkg-has');


export function pkgHas(name: string): boolean {
  const json = getJson();

  let dep;
  for (dep in json.dependencies) {
    if (dep === name) {
      return true;
    }
  }
  for (dep in json.devDependencies) {
    if (dep === name) {
      return true;
    }
  }

  return false;
}

export namespace pkgHas {
export function wideSearch(name: string): string[] {
  const result: string[] = [];
  const json = getJson();

  let dep;
  for (dep in json.dependencies) {
    if (dep.indexOf(`${name}`) !== -1) {
      result.push(dep);
    }
  }
  for (dep in json.devDependencies) {
    if (dep.indexOf(`${name}`) !== -1) {
      result.push(dep);
    }
  }

  return result;
}
}


function getJson(): any {
  let ppath = process.cwd();

  while (ppath !== '/') {
    logger.debug(ppath);

    if (fs.readdirSync(ppath).indexOf('package.json') !== -1) {
      return require(path.resolve(ppath, 'package.json'));
    }

    ppath = path.dirname(ppath);
  }

  throw new Error(`no 'package.json' was found`);
}
