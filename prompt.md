You will be provided with code snippets. Your task is follow the given goals, guidelines, procedures, preferences and styles to solve given problem.

## Styles:

### Writing Style Guide:
1. Descriptive and Concise:
   - Use minimalist and concise language.
   - Maintain an objective and understated tone.
   - Prefer short declarative sentences and simple vocabulary.
   - Use concrete nouns.
   - Stay to the point and keep a balance. Be concise to the core.

### Code Writing Style Guide:
2. Readability and Minimalism:
   - Use clear, short semantic names (not more than two words).
   - Keep comments minimal and visual.
     - Create usage examples in comments.
     - Specify types.
     - Make it easily understandable at first glance using simple words.
   - Use emojis as visual aids if they enhance helpfulness and clarity.
   - Aim to keep the code as simple as possible.

## Preferences:

1. Asynchronous Programming:
   - Perfer using functional programming like map, filter, reduce, etc if makes code more readable.
   - Perfer using conditional operator, short circuit evaluation, ternary operator if only makes code more cleaner.
2. Logging:
   - Log short information, such as the number of items or the length of text, at each step for easier debugging.
    
3. Examples for ease of understanding:
   - Provide examples of usage for functions in comments.
   
4. Commented-out code into features:
   - Convert commented-out code into features, if helps to understand the code maintainability and readability.

5. TypeScript Types:
   - Prefer using TypeScript types rather than PropTypes for type checking.
   - Use TypeScript types even if they're not highly specific; 'any' type is better than no type.
   - Aim for basic typing at minimum, the more specific types as beneficial but not required.



```tsx
import React from "react";
import Footer from "../landings/Footer";
import Helmet from "react-helmet";
import TopBar from "../TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import Box from "@mui/material/Box";
import useSettings from "../../hooks/useSettings";




const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  lang: settings.lang,
  theme: settings.theme,
});


const LayoutTag = (props) => {
  const data = props.data;
  const description = props.data.markdownRemark.frontmatter.description;
  const title = props.data.markdownRemark.frontmatter.title;
  const url = props.location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = React.useState(getValues(settings));

  const handleLanguageDirection = (lang, dir) => {
    setValues({
      ...values,
      lang: lang,
      direction: dir,
    });
    saveSettings({
      ...values,
      lang: lang,
      direction: dir,
    });
  };


  const handleChangeLanguage = (lang): void => {
    switch (lang) {
      case "sv":
        handleLanguageDirection("sv", "ltr");
        break;
      case "no":
        handleLanguageDirection("no", "ltr");
        break;
      case "fi":
        handleLanguageDirection("ar", "ltr");
        break;
      case "dk":
        handleLanguageDirection("tr", "ltr");
        break;
      case "en":
        handleLanguageDirection("en", "ltr");
        break;
      default:
        handleLanguageDirection("en", "ltr");
    }
  };

  React.useEffect(() => {
    handleChangeLanguage(langKey);
  }, [langKey]);

  const i18nMessages = require(`../../data/messages/${langKey || settings.lang
    }`);

  return (
    <>
      <Helmet
        key='app-head'
        defaultTitle={title}
        titleTemplate={`%s | ${title}`}
      >
        <html lang={langKey} />
        <meta name='description' content={description} />
      </Helmet>
      <IntlProvider
        locale={langKey}
        messages={i18nMessages}
        textComponent={React.Fragment}
      >
        <Box
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <TopBar title='Home' icon='logo' />
          {props.children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default LayoutTag;

```

## Procedures:
 - Articulate and think about the problem inside <thoughts> tag, considering what needs to be done, how to do it, edge cases, etc. Write out your insight before begin to solve the problem.

## Guidelines:
 - Reflect on your thought process and the changes you made, along with next steps at the end.
 - Rewrite the given snippet in style of clean code that is easy to understand and read.
 - Add handle network error, handle loading, if applicable.
 - Keep commented-out or unused code, organizing it clearly and explaining its utility. Make useless code useful with good annotation.

## Goal: 
- Rewrite it in clean code that is easy to understand and read.