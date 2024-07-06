type LangKey = 'en' | 'fi' | 'zh' | 'sv';
type JsonData = Record<string, Record<LangKey, string>>;
type LangMenuItem = { link: string };

// Get localized URL for a given ID and language
export const getLocalizedUrl = (id: string, langKey: LangKey, jsonData: JsonData): string => {
  if (id === 'undefined') {
    console.error('Missing id in getLocalizedUrl()');
    return '';
  }

  return jsonData[id]?.[langKey] || '';
};

// Extract base path from URL
export const extractBasePath = (langKey: string, basename: string, url: string): string => {
  const langKeyLength = langKey.length;
  const baseNameIndex = url.indexOf(basename);
  return url.slice(langKeyLength + 2, baseNameIndex);
};

// Check path and return basename and article ID
export const checkPath = (langKey: LangKey, url: string, articleId: string, jsonData: JsonData): [string | undefined, string] => {
  let basename;
  if (articleId !== 'undefined') {
    basename = getLocalizedUrl(articleId, langKey, jsonData);
  }
  return [basename, articleId];
};

// Set language menu links
export const setLangMenuLinks = (langsMenu: LangMenuItem[], id: string, basePath: string, jsonData: JsonData): void => {
  if (id === 'undefined') {
    console.error('Missing id in setLangMenuLinks()');
    return;
  }

  const languages: LangKey[] = ['en', 'sv'];
  languages.forEach((lang, index) => {
    langsMenu[index].link = `/${lang}/${basePath}${getLocalizedUrl(id, lang, jsonData)}/`;
  });
};

// Commented-out code for potential future use:
/*
// Example of adding more languages to setLangMenuLinks
const allLanguages: LangKey[] = ['en', 'sv', 'fi', 'zh'];
export const setAllLangMenuLinks = (langsMenu: LangMenuItem[], id: string, basePath: string, jsonData: JsonData): void => {
  if (id === 'undefined') {
    console.error('Missing id in setAllLangMenuLinks()');
    return;
  }

  allLanguages.forEach((lang, index) => {
    langsMenu[index].link = `/${lang}/${basePath}${getLocalizedUrl(id, lang, jsonData)}/`;
  });
};
*/