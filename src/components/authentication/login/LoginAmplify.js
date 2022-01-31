import React from 'react'
import { navigate, Link } from 'gatsby';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Alert, Box, Button, FormHelperText, TextField, Divider, Typography } from '@mui/material';
import { Auth } from "aws-amplify";
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import SocialSignIn from '../../../components/SocialSignIn'
import { useSnackbar } from "notistack";

const LoginAmplify = () => {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const signIn = async (username, password) => {
    return await Auth.signIn(username, password)
  }
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
            Login
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
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
            await signIn(values.email, values.password)
              .then((successful) => {
                enqueueSnackbar("redirecting to the client area", {
                  variant: 'success',
                });
                if (isMountedRef.current) {
                  setStatus({ success: true });
                  setSubmitting(false);
                }
                navigate("/app");
              })

          } catch (err) {
            console.error(err);

            if (err.code === 'UserNotConfirmedException') {
              navigate('/auth/verify', {
                state: {
                  username: values.email
                }
              });
              return;
            }

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
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
            </Box>
            <Box sx={{ mt: 3 }}>
              {/* <Alert severity="info">
            </Alert> */}
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <SocialSignIn />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/recovery'>
            Forgot password
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

export default LoginAmplify;
