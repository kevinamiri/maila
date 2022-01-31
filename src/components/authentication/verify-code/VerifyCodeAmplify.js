import React, { useEffect, useRef } from 'react';
import { navigate, Link } from 'gatsby';
import { useLocation } from '@reach/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, FormHelperText, TextField, Typography, Divider } from '@mui/material';
import { Auth } from "aws-amplify";
import { useSnackbar } from "notistack";
import useIsMountedRef from '../../../hooks/useIsMountedRef';

const VerifyCodeAmplify = () => {
  const isMountedRef = useIsMountedRef();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, 6);
  }, []);

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
            verification
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: location.state?.username || '',
          code: ['', '', '', '', '', ''],
          submit: null
        }}
        validationSchema={Yup
          .object()
          .shape({
            email: Yup
              .string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required'),
            code: Yup
              .array()
              .of(Yup.string().required('Code is required'))
          })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await Auth.confirmSignUp(values.email, values.code.join(''));
            enqueueSnackbar(`Login using email and password you have created`, {
              variant: 'success',
            });
            navigate('/auth/login');
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus(true);
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          touched,
          values
        }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
          >
            {!location.state?.username
              ? (
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
              )
              : (
                <TextField
                  disabled
                  fullWidth
                  margin="normal"
                  value={location.state.username}
                  variant="outlined"
                />
              )}
            <Typography
              color="textSecondary"
              sx={{
                mb: 2,
                mt: 3
              }}
              variant="subtitle2"
            >
              Verification code
            </Typography>
            <Box
              sx={{
                display: 'grid',
                columnGap: '16px',
                gridTemplateColumns: 'repeat(7, 1fr)',
                pt: 1
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((ref, i) => (
                <TextField
                  error={Boolean(Array.isArray(touched.code)
                    && touched.code.length === 6
                    && errors.code)}
                  fullWidth
                  inputRef={(el) => itemsRef.current[i] = el}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`code-${i}`}
                  name={`code[${i}]`}
                  onBlur={handleBlur}
                  onKeyDown={(event) => {
                    if (event.code === 'ENTER') {
                      if (values.code[i]) {
                        setFieldValue(`code[${i}]`, '');
                        return;
                      }

                      if (i > 0) {
                        setFieldValue(`code[${i}]`, '');
                        itemsRef.current[i - 1].focus();
                        return;
                      }
                    }

                    if (Number.isInteger(parseInt(event.key, 10))) {
                      setFieldValue(`code[${i}]`, event.key);

                      if (i < 5) {
                        itemsRef.current[i + 1].focus();
                      }
                    }
                  }}
                  onPaste={(event) => {
                    const paste = event.clipboardData.getData('text');
                    const pasteArray = paste.split('');

                    if (pasteArray.length !== 6) {
                      return;
                    }

                    let valid = true;

                    pasteArray.forEach((x) => {
                      if (!Number.isInteger(parseInt(x, 10))) {
                        valid = false;
                      }
                    });

                    if (valid) {
                      setFieldValue('code', pasteArray);
                      itemsRef.current[5].focus();
                    }
                  }}
                  value={values.code[i]}
                  sx={{
                    display: 'inline-block',
                    textAlign: 'center',
                    '& .MuiInputBase-input': {
                      textAlign: 'center'
                    }
                  }}
                  variant="outlined"
                />
              ))}
            </Box>
            {Boolean(Array.isArray(touched.code)
              && touched.code.length === 6
              && errors.code) && (
                <FormHelperText
                  error
                  sx={{ mx: '14px' }}
                >
                  {Array.isArray(errors.code) && errors.code.find((x) => x !== undefined)}
                </FormHelperText>
              )}
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
                Verify
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/Recovery'>
            Send reset request
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link color='textSecondary' to='/auth/login'>
            Login
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default VerifyCodeAmplify;
