import React from "react";
import { Link } from "gatsby";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AccountNotificationsSettings = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // NOTE: Make API request

    enqueueSnackbar("Changes saved", {
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
      variant: "success",
    });
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <Card>
        <CardHeader title='Notifications' />
        <CardContent>
          <Grid container spacing={6} wrap='wrap'>
            <Grid item md={4} sm={6} xs={12}>
              <Typography color='textPrimary' gutterBottom variant='subtitle2'>
                System
              </Typography>
              <Typography color='textSecondary' gutterBottom variant='body2'>
                What settings do I choose for UI? UI is what appears on your
                screen.
              </Typography>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label='Dark theme'
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' />}
                  label='Push Notifications'
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label='Text message'
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label={
                    <>
                      <Typography color='textPrimary' variant='body1'>
                        Phone calls
                      </Typography>
                      <Typography color='textSecondary' variant='caption'>
                        Short voice phone updating you
                      </Typography>
                    </>
                  }
                />
              </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Typography color='textPrimary' gutterBottom variant='subtitle2'>
                System notifications
              </Typography>
              <Typography color='textSecondary' gutterBottom variant='body2'>
                Figure out what information you want to get alerts about
              </Typography>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label='Terms and conditions'
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label='Changes in your account'
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label='Changes in our platform'
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color='primary' type='submit' variant='contained'>
            Save Settings
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountNotificationsSettings;
