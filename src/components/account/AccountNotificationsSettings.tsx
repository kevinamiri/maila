import React from "react";
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
        <CardHeader title='System notifications' />
        <CardContent>
          <Grid container spacing={6} wrap='wrap'>
            <Grid item md={4} sm={6} xs={12}>
              <Typography
                color='textSecondary'
                gutterBottom
                variant='body2'
              ></Typography>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label='Update in Terms and conditions'
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label='Change in product features'
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox color='primary' defaultChecked />}
                  label='Discounts and offers'
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
