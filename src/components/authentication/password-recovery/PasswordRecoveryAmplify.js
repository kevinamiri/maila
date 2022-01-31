import React from 'react';
import { navigate, Link } from 'gatsby';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, FormHelperText, TextField, Divider } from '@mui/material';
import { Auth } from "aws-amplify";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import useIsMountedRef from '../../../hooks/useIsMountedRef';


const PasswordRecoveryAmplify = () => {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <div>
          <Typography color='textPrimary' gutterBottom variant='h4'>
            Recover Password
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: '',
          submit: null
        }}
        validationSchema={Yup
          .object()
          .shape({
            email: Yup
              .string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required')
          })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await Auth.forgotPassword(values.email).then((seccessful) => {
              let { CodeDeliveryDetails } = seccessful
              let emailDestination = CodeDeliveryDetails.Destination
              setStatus({ success: true });
              setErrors({ submit: seccessful.message });
              setSubmitting(true)
              navigate('/auth/reset', {
                state: {
                  username: values.email
                }
              })
            })
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              autoFocus
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 3 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Recover Password
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/login'>
            Login
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link color='textSecondary' to='/auth/register'>
            Create an account
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PasswordRecoveryAmplify;
