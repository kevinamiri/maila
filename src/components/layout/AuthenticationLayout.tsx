import React, { Children } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import "../../../configureAmplify";
import Helmet from "react-helmet";
import { useIntl } from "react-intl";
import { SnackbarProvider } from "notistack";

const AuthenticationLayout = (props) => {
  const intl = useIntl();

  return (
    <>
      <Helmet
        key='app-head'
        defaultTitle={intl.formatMessage({ id: "AU10" })}
        titleTemplate={`%s | ${intl.formatMessage({ id: "AU10" })}`}
      >
        <html lang={intl.locale} />
        <meta name='description' content={intl.formatMessage({ id: "F46" })} />
      </Helmet>
      <SnackbarProvider maxSnack={3}>
        <Box
          sx={{
            backgroundColor: "background.default",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Container maxWidth='sm' sx={{ py: "80px" }}>
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                }}
              >
                {props.children}
              </CardContent>
            </Card>
          </Container>
        </Box>
      </SnackbarProvider>
    </>
  );
};

export default AuthenticationLayout;
