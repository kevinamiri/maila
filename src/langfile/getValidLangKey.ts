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

// filter: creates a new array with all elements that pass the test implemented by the provided function
function filter<T>(fn: (value: T) => boolean, array: T[]): T[] {
  return array.filter(fn);
}

// isNil: checks if a value is null or undefined
function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

// startsWith: checks if a string starts with a given substring
function startsWith(substring: string, str: string): boolean {
  return str.startsWith(substring);
}


/**
 * Get valid langKey in langs or return defaultLangKey
 * @func
 * @param {[String]} langs allowed lang keys ['en', 'fr', 'pt']
 * @param {String} defaultLangKey default browser language key
 * @returns {String} valid langKey
 */
const getValidLangKey = curry((langs, defaultLangKey, langKey) => {
  if (isNil(langKey)) {
    return defaultLangKey;
  }

  const currentLangKey = filter(l => startsWith(l, langKey), langs);
  return currentLangKey[0] || defaultLangKey;
});

export default getValidLangKey;
