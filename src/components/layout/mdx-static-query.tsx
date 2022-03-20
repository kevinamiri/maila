// import React from "react";
// import Footer from "../landings/Footer";
// import SEO from "../SEO/SEO";
// import TopBar from "../TopBar";
// import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
// import { IntlProvider } from "react-intl";
// import GlobalStyles from "../GlobalStyles";
// import { getSrc } from "gatsby-plugin-image";
// import { Box } from "@mui/material";
// import useSettings from "../../hooks/useSettings";

// import { StaticQuery, graphql } from "gatsby";

// const Layout = (props) => {
//   const data = props.pageContext;
//   console.log(props);
//   const location = props.location;
//   const isBlogPost = props.isBlogPost;
//   const imageSrc =
//     props.pageContext.frontmatter.image &&
//     getSrc(props.pageContext.frontmatter.image);

//   const url = props.location.pathname;
//   const langKey = props.pageContext.langKey;

//   const { settings, saveSettings } = useSettings();
//   const handleChange = (field, value) => {
//     saveSettings({
//       ...settings,
//       [field]: value,
//     });
//     // polyfill(value);
//   };

//   React.useEffect(() => {
//     langKey === "sv"
//       ? handleChange("lang", "sv")
//       : langKey === "no"
//       ? handleChange("lang", "no")
//       : langKey === "fi"
//       ? handleChange("lang", "fi")
//       : langKey === "da"
//       ? handleChange("lang", "da")
//       : handleChange("lang", "en");
//   }, []);

//   const i18nMessages = require(`../../data/messages/${
//     langKey || settings.lang
//   }`);

//   const imageStatus = imageSrc ? true : false;
//  return (
//     <>
//       <IntlProvider
//         locale={langKey}
//         messages={i18nMessages}
//         textComponent={React.Fragment}
//       >
//         <StaticQuery
//           query={graphql`
//             query StaticQuery {
//               allMdx {
//                 edges {
//                   node {
//                     excerpt
//                     id
//                     tableOfContents
//                   }
//                 }
//               }
//               site {
//                 siteMetadata {
//                   languages {
//                     defaultLangKey
//                     langs
//                   }
//                   title
//                   description
//                 }
//               }
//             }
//           `}
//           render={(data) => {
//             console.log(data);
//             const { langs, defaultLangKey } = data.site.siteMetadata.languages;
//             const langKey = getCurrentLangKey(langs, defaultLangKey, url);
//             const homeLink = `/${langKey}/`;
//             const langsMenu = getLangs(
//               langs,
//               langKey,
//               getUrlForLang(homeLink, url)
//             );
//             return (
//               <>
//                 <SEO
//                   postData={data}
//                   postImage={imageStatus && imageSrc}
//                   langKey={langKey}
//                   isBlogPost={isBlogPost ? true : false}
//                 />

//                 <Box
//                   sx={{
//                     backgroundColor: "background.paper",
//                   }}
//                 >
//                   <GlobalStyles />
//                   <TopBar title='maila.ai' icon='logo' />
//                   {props.children}
//                   <Footer langKey={langKey} langs={langsMenu} />
//                 </Box>
//               </>
//             );
//           }}
//         />
//       </IntlProvider>
//     </>
//   );
// };

// export default Layout;
