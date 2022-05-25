import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "../Link";
import Box from "@mui/material/Box";
import SelectLanguage from "../homepage/SelectLanguage";
import select from "../homepage/utils";
import { FormattedMessage } from "react-intl";
import { styled } from "@mui/material/styles";
import ContactDialogs from "../homepage/ContactDialogs";
import Container from "@mui/material/Container";

export default function Footer(props) {
  const NewContainer = styled("footer")(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
    maxWidth: "100%",
    paddingRight: "10%",
    paddingLeft: "10%",
    display: "block",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  }));

  const sel = select(props.langKey);
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
        }}
      >
        <NewContainer>
          <Grid container spacing={4} justifyContent='space-evenly'>
            <Grid item xs={6} sm={3} key={"company"}>
              <Typography
                sx={{ mb: 2 }}
                variant='subtitle2'
                component={"p"}
                color='text.primary'
                gutterBottom
              >
                <FormattedMessage id='T04' />
              </Typography>
              <ContactDialogs />
            </Grid>
            <Grid item xs={6} sm={3} key={"explore"}>
              <Typography
                sx={{ mb: 2 }}
                variant='subtitle2'
                component={"p"}
                color='text.primary'
                gutterBottom
              >
                <FormattedMessage id='T05' />
              </Typography>
              <Typography sx={{ mb: 2 }} variant='body2'>
                <Link tabIndex={0} to={`/${props.langKey}/blog`}>
                  Blog
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} key={"support"}>
              <Typography
                variant='subtitle2'
                component={"p"}
                color='text.primary'
                gutterBottom
              >
                <FormattedMessage id='S01' />
              </Typography>
              <Typography sx={{ mb: 2 }} variant='body2'>
                <Link to={`/${props.langKey}/contact`}>
                  <FormattedMessage id='CA094' />
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} key={"terms"}>
              <Typography
                variant='subtitle2'
                component={"p"}
                color='text.primary'
                gutterBottom
              >
                <FormattedMessage id='TAS025' />
              </Typography>
              <Typography sx={{ mb: 1 }} variant='body2' color='primary'>
                <Link to={`/${props.langKey}/legal/terms-of-use`}>
                  <FormattedMessage id='TS01' />
                </Link>
              </Typography>
              <Typography sx={{ mb: 1 }} variant='body2'>
                <Link to={`/${props.langKey}/legal/privacy-policy`}>
                  <FormattedMessage id='PP01' />
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Box mt={5}>
            <SelectLanguage langs={props.langs} />
          </Box>
        </NewContainer>
      </Container>
    </>
  );
}
