import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";
import Link from "../Link";
// it could be your App.tsx file or theme file that is included in your tsconfig.json
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";

const LangButton = styled(Button)(({ theme }) => ({
  padding: "2px",
  margin: 0,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

function FWB(props, ref) {
  return <LangButton ref={ref} {...props} />;
}
const LanguageButton = React.forwardRef(FWB);

//All GPT3 languages

// const languageTag = {
//   en: "EN-English",
//   fr: "FR-French",
//   no: "NO-Norwegian",
//   de: "DE-German",
//   es: "ES-Spanish",
//   it: "IT-Italian",
//   pt: "PT-Portuguese",
//   nl: "NL-Dutch",
//   ru: "RU-Russian",
//   ro: "RO-Romanian",
//   pl: "PL-Polish",
//   fi: "FI-Finnish",
//   da: "DA-Danish",
//   sv: "SV-Swedish",
//   ja: "JA-Japanese",
//   zh: "ZH-Chinese",
//   cs: "CS-Czech",
//   hu: "HU-Hungarian",
//   id: "ID-Indonesian",
// };

const SelectLanguage = (props) => {
  const languageTag = {
    en: "EN-English",
    fi: "FI-Finnish",
    da: "DA-Danish",
    sv: "SV-Swedish",
    no: "NO-Norwegian",
    // fr: "FR-French",
    // de: "DE-German",
    // es: "ES-Spanish",
    // it: "IT-Italian",
    // pt: "PT-Portuguese",
    // nl: "NL-Dutch",
    // ru: "RU-Russian",
    // ro: "RO-Romanian",
    // pl: "PL-Polish",
    // ja: "JA-Japanese",
    // zh: "ZH-Chinese",
    // cs: "CS-Czech",
    // hu: "HU-Hungarian",
    // id: "ID-Indonesian",
  };
  const linksOf = props.langs.map((lang, index) => {
    return (
      <Box
        key={index + 3}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <LanguageButton
          aria-label={lang.langKey}
          size='small'
          disabled={lang.selected}
        >
          <Typography
            variant='caption'
            color={lang.selected ? "primary.main" : "text.primary"}
          >
            <Link
              sx={{
                borderBottom: "none",
                mr: 1,
                cursor: lang.selected ? "default" : "pointer",
                color: !lang.selected ? "primary.main" : "text.primary",
                textDecoration: "none",
                "&:hover": {
                  borderBottom: "none",
                  textDecoration: "none",
                },
              }}
              to={lang.link}
              alt={lang.langKey}
            >
              {languageTag[`${lang.langKey}`]}
            </Link>
          </Typography>
        </LanguageButton>
      </Box>
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {linksOf}
    </Box>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;

//mui v4 => v5
declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}
