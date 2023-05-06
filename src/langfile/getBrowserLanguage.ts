/**
 * Get browser language.
 *
 * @return {String} langKey
 */
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

export default getBrowserLanguage;
