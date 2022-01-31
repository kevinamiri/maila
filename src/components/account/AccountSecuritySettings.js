import * as React from 'react';
import { Link } from 'gatsby';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Auth } from "aws-amplify";

const AccountSecuritySettings = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        oldPassword: '',
        newPassword: '',
        passwordConfirm: '',
        submit: null
      }}
      validationSchema={Yup
        .object()
        .shape({
          newPassword: Yup
            .string()
            .min(7, 'Must be at least 7 characters')
            .max(255)
            .required('Required'),
          passwordConfirm: Yup
            .string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Required')
        })}
      onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
        try {
          // NOTE: Make API request
          await Auth.currentAuthenticatedUser()
            .then(user => {
              return Auth.changePassword(user, values.oldPassword, values.newPassword);
            })
            .then(data => {
              console.log(data)
              setStatus({ success: true });
              setSubmitting(false);
              enqueueSnackbar('Password updated', {
                anchorOrigin: {
                  horizontal: 'right',
                  vertical: 'top'
                },
                variant: 'success'
              });
            })
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form
          onSubmit={handleSubmit}
          {...props}
        >
          <Card>
            <CardHeader title="Change Password" />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.oldPassword && errors.oldPassword)}
                    fullWidth
                    helperText={touched.oldPassword && errors.oldPassword}
                    label="Old Password"
                    name="oldPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.oldPassword}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    fullWidth
                    helperText={touched.newPassword && errors.newPassword}
                    label="New Password"
                    name="newPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.newPassword}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
                    fullWidth
                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                    label="Password Confirmation"
                    name="passwordConfirm"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.passwordConfirm}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
              }}
            >
              <Button
                color="primary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Change Password
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default AccountSecuritySettings;
