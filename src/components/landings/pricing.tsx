import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "../../icons/check-circle-outlined";
import { useIntl } from "react-intl";
import { navigate } from "gatsby";

export const Pricing = ({ tables, plans }) => {
  const intl = useIntl();
  const locale = `/${intl.locale}/contact`;
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: 6,
      }}
      component='section'
      aria-label='pricing tables'
    >
      <Container
        maxWidth='lg'
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          align='center'
          color='success.main'
          sx={{ mb: 5 }}
          variant='h2'
        >
          {tables.header && tables.header}
        </Typography>
        <Grid container spacing={2} sx={{ mb: 5 }}>
          {plans &&
            plans.map((plan, index) => (
              <Grid item key={index + 4059} md={4} xs={12}>
                <Card
                  elevation={2}
                  sx={{
                    p: {
                      md: 2,
                      xs: 1,
                    },
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography color='text.disabled' variant='overline'>
                    {plan.free && plan.free.price}
                    {plan.growth && plan.growth.price}
                    {plan.corporate && plan.corporate.price}
                  </Typography>
                  <Typography
                    color='primary.main'
                    sx={{ textAlign: "center" }}
                    variant='h4'
                  >
                    {plan.free && plan.free.name}
                    {plan.growth && plan.growth.name}
                    {plan.corporate && plan.corporate.name}
                  </Typography>
                  <List
                    sx={{
                      px: 1,
                      py: 2,
                    }}
                  >
                    {plan.free &&
                      plan.free.features.map((feature, index) => (
                        <ListItem key={index + 454} disableGutters>
                          <ListItemIcon
                            sx={{
                              minWidth: "auto",
                              mr: 0.5,
                              color: "success.main",
                            }}
                          >
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              sx: {
                                color: "textSecondary",
                              },
                              variant: "subtitle2",
                            }}
                          />
                        </ListItem>
                      ))}
                    {plan.growth &&
                      plan.growth.features.map((feature, index) => (
                        <ListItem key={index + 900} disableGutters>
                          <ListItemIcon
                            sx={{
                              minWidth: "auto",
                              mr: 0.5,
                              color: "success.main",
                            }}
                          >
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              sx: {
                                color: "textSecondary",
                              },
                              variant: "subtitle2",
                            }}
                          />
                        </ListItem>
                      ))}
                    {plan.corporate &&
                      plan.corporate.features.map((feature, index) => (
                        <ListItem key={feature} disableGutters>
                          <ListItemIcon
                            sx={{
                              minWidth: "auto",
                              mr: 0.5,
                              color: "success.main",
                            }}
                          >
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              sx: {
                                color: "textSecondary",
                              },
                              variant: "subtitle2",
                            }}
                          />
                        </ListItem>
                      ))}
                  </List>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    <Button
                      component='a'
                      href='/app'
                      size='small'
                      target='_blank'
                    >
                      <Typography variant='subtitle2' color='primary'>
                        {tables.button && tables.button}
                      </Typography>
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Typography sx={{ m: 1 }} color='success.main' variant='h3'>
          {tables.cta && tables.cta}
        </Typography>
        <Typography sx={{ my: 1 }} color='textSecondary' variant='body1'>
          {tables.cta_caption && tables.cta_caption}
        </Typography>
        <Button
          color='primary'
          size='medium'
          sx={{ m: 1 }}
          variant='contained'
          aria-label='contact-us button'
          onClick={() => navigate(locale)}
        >
          <Typography color='#fff' variant='subtitle2'>
            {tables.cta_button && tables.cta_button}
          </Typography>
        </Button>
      </Container>
    </Box>
  );
};
