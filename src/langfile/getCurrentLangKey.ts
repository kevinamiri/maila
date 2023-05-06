type Curry = <T extends (...args: any[]) => TResult, TResult = ReturnType<T>>(
  fn: T,
) => (...args: Parameters<T>) => TResult;

const curry: Curry = (fn) => {
  const curried = (...args: any[]) =>
    args.length >= fn.length
      ? fn.apply(null, args)
      : (...args2: any[]) => curried.apply(null, args.concat(args2));
  return curried;
};

import getValidLangKey from './getValidLangKey';

/**
 * Get current language key from url.
 * @func
 * @param {string[]} langs allowed lang keys ['en', 'fr', 'pt']
 * @param {string} defaultLangKey default browser language key
 * @param {string} url browser url
 * @returns {string} current langKey
 */
const getCurrentLangKey = curry(
  (langs: string[], defaultLangKey: string, url: string): string => {
    const langKey = url.split('/')[1];
    return getValidLangKey(langs, defaultLangKey, langKey);
  },
);

export default getCurrentLangKey;
