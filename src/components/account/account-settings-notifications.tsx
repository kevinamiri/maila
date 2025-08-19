// =================================================================
// Imports
// =================================================================
import React, { FC, FormEvent } from 'react';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// =================================================================
// Types
// =================================================================
interface AccountNotificationsSettingsProps
  extends React.FormHTMLAttributes<HTMLFormElement> {}

// =================================================================
// Component
// =================================================================
const AccountNotificationsSettings: FC<AccountNotificationsSettingsProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  // 🔔 handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      enqueueSnackbar('Changes saved', {
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
        variant: 'success',
      });
    } catch (error) {
      console.error('Failed to save settings', error);
    }
  };

  return (
    // 🔔 Notifications Settings Form
    <form onSubmit={handleSubmit} {...props}>
      <Card>
        <CardHeader title="System notifications" />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid item md={4} sm={6} xs={12}>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                component="p"
              />
              {/* Notification Options */}
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked
                      size="small"
                    />
                  }
                  label="Update in Terms and conditions"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked
                      size="small"
                    />
                  }
                  label="Change in product features"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked
                      size="small"
                    />
                  }
                  label="Discounts and offers"
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            size="small"
          >
            Save Settings
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountNotificationsSettings;
