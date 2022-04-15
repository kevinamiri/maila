import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { FormattedMessage } from "react-intl";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { zIndex } from '@mui/material/styles';

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
      <Grid item key={index + 3}
        selected={lang.selected}
      >
        <Typography>
          <Link
            to={lang.link}
            alt={lang.langKey}
          >
            {lang.selected ? <Button size="small" disabled>
              {languageTag[`${lang.langKey}`]}
            </Button> : <Button size="small" color="primary">
              {languageTag[`${lang.langKey}`]}
            </Button>}
          </Link>
        </Typography>
      </Grid>
    );
  });
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={1}
    >
      {linksOf}
    </Grid>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;
