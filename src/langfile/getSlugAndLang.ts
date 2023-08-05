
// compose: takes multiple functions and returns a function that applies them from right to left
function compose<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return function composed(result: T): T {
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}

// curry: transforms a function with multiple arguments into a sequence of functions each with a single argument
function curry(fn: (...args: any[]) => any) {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return (...args2: any[]) => curried.apply(null, args.concat(args2));
    }
  };
}

// isNil: checks if a value is null or undefined
function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

// head: returns the first element of an array
function head<T>(array: T[]): T | undefined {
  return array[0];
}

// not: returns the logical negation of a boolean value
function not(value: boolean): boolean {
  return !value;
}

// startsWith: checks if a string starts with a given substring
function startsWith(substring: string, str: string): boolean {
  return str.startsWith(substring);
}

// endsWith: checks if a string ends with a given substring
function endsWith(substring: string, str: string): boolean {
  return str.endsWith(substring);
}


const defaultPagesPaths: string[] = ['/src/pages/'];

interface Options {
  langKeyDefault?: string;
  pagesPaths?: string[];
}

const getPagesPaths = (options: Options | undefined): string[] =>
  (options && options.pagesPaths) || defaultPagesPaths;

const getLangKeyDefault = (options: Options | undefined): string | undefined =>
  (options && options.langKeyDefault) || undefined;

const addSlashStart = (fileName: string): string =>
  startsWith('/', fileName) ? fileName : '/' + fileName;

const addSlashEnd = (fileName: string): string =>
  endsWith('/', fileName) ? fileName : fileName + '/';

const addSlash = compose(addSlashStart, addSlashEnd);

interface SlugAndLang {
  slug: string;
  langKey: string;
  redirectTo: string | null;
}

/**
 * Get slug (path) and langKey for a given file path.
 *
 * Used by gatsby-plugin-i18n and gatsby-plugin-i18n-tags
 *
 * @param {{langKeyDefault: string, pagesPaths: string[] }} options plugin options
 * @param {String} fileAbsolutePath local file absolute path
 * @return {{slug: string, langKey: string, redirectTo: string}} slug and langKey
 */
const getSlugAndLang = curry((options: Options, fileAbsolutePath: string): SlugAndLang | undefined => {
  const slugsAndLangs: (SlugAndLang | null)[] = getPagesPaths(options).map(pagesPath => {
    const filePath = `safeStartToSplit-${fileAbsolutePath}`.split(pagesPath)[1];

    if (isNil(filePath)) {
      return null;
    }

    const langKeyDefault = getLangKeyDefault(options);
    const fileName = filePath.split('.');
    const langKey = fileName.length === 3 ? fileName[1] : langKeyDefault;
    const slug = addSlash(
      (fileName.length === 3 ? langKey : '') +
      addSlash(fileName[0].replace('index', ''))
    );

    return {
      slug,
      langKey,
      redirectTo: slug === '/' ? addSlash(langKeyDefault || '') : null
    };
  });

  return head(slugsAndLangs.filter(compose(not, isNil)));
});

export default getSlugAndLang;

