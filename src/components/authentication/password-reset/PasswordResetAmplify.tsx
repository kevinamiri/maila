import React, { useEffect, useRef } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Auth } from "aws-amplify";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { useSnackbar } from "notistack";
import { useIntl } from "react-intl";
import Link from "../../Link";

const PasswordResetAmplify = () => {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const itemsRef = useRef([]);
  const intl = useIntl();

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
            {intl.formatMessage({ id: "LanguageResetPassword" })}
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          code: ["", "", "", "", "", ""],
          email: location.state?.['username'] || "",
          password: "",
          passwordConfirm: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          code: Yup.array().of(
            Yup.string().required(`${intl.formatMessage({ id: "E503" })}`)
          ),
          email: Yup.string()
            .email(`${intl.formatMessage({ id: "E501" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E502" })}`),
          password: Yup.string()
            .min(7, `${intl.formatMessage({ id: "E504" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E505" })}`),
          passwordConfirm: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              `${intl.formatMessage({ id: "E506" })}`
            )
            .required(`${intl.formatMessage({ id: "E505" })}`),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await Auth.forgotPasswordSubmit(
              values.email,
              values.code.join(""),
              values.password
            ).then((seccessful) => {
              enqueueSnackbar(`${intl.formatMessage({ id: "F38" })}`, {
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "center",
                },
                variant: "success",
              });
              setStatus({ success: true });
              navigate("/auth/login");
            });
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
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {!((location.state as any)?.username) ? (
              <TextField
                autoFocus
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && typeof errors.email === 'string' ? errors.email : undefined}
                label={intl.formatMessage({ id: "F44" })}
                margin='normal'
                name='email'
                id='email'
                onBlur={handleBlur}
                onChange={handleChange}
                type='email'
                value={values.email}
                variant='outlined'
              />
            ) : (
              <TextField
                disabled
                fullWidth
                margin='normal'
                value={(location.state as any)?.username}
                variant='outlined'
              />
            )}
            <Typography
              color='textSecondary'
              sx={{
                mb: 2,
                mt: 3,
              }}
              variant='subtitle2'
            >
              {intl.formatMessage({ id: "F39" })}
            </Typography>
            <Box
              sx={{
                columnGap: "16px",
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                py: 1,
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((ref, i) => (
                <TextField
                  error={Boolean(
                    Array.isArray(touched.code) &&
                    touched.code.length === 6 &&
                    errors.code
                  )}
                  fullWidth
                  inputRef={(el) => (itemsRef.current[i] = el)}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`codeNumber-${i}`}
                  name={`code[${i}]`}
                  onBlur={handleBlur}
                  onKeyDown={(event) => {
                    if (event.code === "ENTER") {
                      if (values.code[i]) {
                        setFieldValue(`code[${i}]`, "");
                        return;
                      }

                      if (i > 0) {
                        setFieldValue(`code[${i}]`, "");
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
                    const paste = event.clipboardData.getData("text");
                    const pasteArray = paste.split("");

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
                      setFieldValue("code", pasteArray);
                      itemsRef.current[5].focus();
                    }
                  }}
                  value={values.code[i]}
                  sx={{
                    display: "inline-block",
                    textAlign: "center",
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                    },
                  }}
                  variant='outlined'
                />
              ))}
            </Box>
            {Boolean(
              Array.isArray(touched.code) &&
              touched.code.length === 6 &&
              errors.code
            ) && (
                <FormHelperText error sx={{ mx: "14px" }}>
                  {Array.isArray(errors.code) &&
                    errors.code.find((x) => x !== undefined)}
                </FormHelperText>
              )}
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label={intl.formatMessage({ id: "F45" })}
              margin='normal'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.password}
              variant='outlined'
            />
            <TextField
              error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
              fullWidth
              helperText={touched.passwordConfirm && errors.passwordConfirm}
              label={intl.formatMessage({ id: "F47" })}
              margin='normal'
              name='passwordConfirm'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.passwordConfirm}
              variant='outlined'
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>
                  {typeof errors.submit === 'string' ? errors.submit : ''}
                </FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 3 }}>
              <Button
                color='primary'
                disabled={isSubmitting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                {intl.formatMessage({ id: "LanguageResetPassword" })}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/recovery'>
            {intl.formatMessage({ id: "F37" })}
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link color='textSecondary' to='/auth/login'>
            {intl.formatMessage({ id: "L66" })}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PasswordResetAmplify;
