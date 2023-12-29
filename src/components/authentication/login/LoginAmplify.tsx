import React from "react";
import { navigate } from "gatsby";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Auth } from "aws-amplify";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import SocialSignIn from "../../SocialSignIn";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import { useIntl } from "react-intl";
import Link from "../../../components/Link";

const LoginAmplify = (props) => {
  const intl = useIntl();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const signIn = async (username, password) => {
    return await Auth.signIn(username, password);
  };

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
            {props.isRedirecting ? (
              <CircularProgress />
            ) : (
              intl.formatMessage({ id: "L66" })
            )}
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(`${intl.formatMessage({ id: "E501" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E502" })}`),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await signIn(values.email, values.password).then((successful) => {
              enqueueSnackbar(`${intl.formatMessage({ id: "E511" })}`, {
                variant: "success",
              });
              if (isMountedRef.current) {
                setStatus({ success: true });
                setSubmitting(false);
              }
              navigate("/app");
            });
          } catch (err) {
            console.error(err);
            if (err.code === "UserNotConfirmedException") {
              navigate("/auth/verify", {
                state: {
                  username: values.email,
                },
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
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              autoFocus
              id='email'
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label={intl.formatMessage({ id: "F44" })}
              margin='normal'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              type='email'
              value={values.email}
              variant='outlined'
              disabled={props.isRedirecting}
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label={intl.formatMessage({ id: "F45" })}
              margin='normal'
              id='password'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              type='password'
              value={values.password}
              variant='outlined'
              disabled={props.isRedirecting}
            />
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit.toString()}</FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                color='primary'
                disabled={isSubmitting || props.isRedirecting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                {intl.formatMessage({ id: "L66" })}
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
      <SocialSignIn disabled={props.isRedirecting} />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/recovery'>
            {intl.formatMessage({ id: "F33" })}
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link color='textSecondary' to='/auth/register'>
            {intl.formatMessage({ id: "F34" })}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default LoginAmplify;
