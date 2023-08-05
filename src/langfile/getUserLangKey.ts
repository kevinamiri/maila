

const getBrowserLanguage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const customNavigator = window.navigator as Navigator & {
    browserLanguage?: string;
    userLanguage?: string;
  };

  return (
    customNavigator.languages?.[0] ||
    customNavigator.language ||
    customNavigator.browserLanguage ||
    customNavigator.userLanguage
  );
};

import getValidLangKey from './getValidLangKey';


// function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
//   return function piped(result: T): T {
//     for (let i = 0; i < fns.length; i++) {
//       result = fns[i](result);
//     }
//     return result;
//   };
// }


/**
 * Get user browser valid langKey
 * @param {[String]} langs allowed lang keys ['en', 'fr', 'pt']
 * @param {String} defaultLangKey default browser language key
 * @return {string} valid langKey
 */
const getUserLangKey = (langs, defaultLangKey) =>
  getValidLangKey(langs, defaultLangKey)(getBrowserLanguage());

export default getUserLangKey;

