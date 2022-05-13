import React, { useEffect, useRef } from "react";
import { navigate } from "gatsby";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Auth } from "aws-amplify";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import SocialSignIn from "../../SocialSignIn";
import { useIntl } from "react-intl";
import Link from "../../../components/Link";

const RegisterAmplify = () => {
  const intl = useIntl();
  const isMountedRef = useIsMountedRef();
  const termLink = `/${intl.locale}/legal/terms-of-use`;
  const registering = async (email, password) => {
    return await Auth.signUp({
      username: email,
      password,
      attributes: { email },
    });
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
            {intl.formatMessage({ id: "F40" })}
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
          policy: true,
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(`${intl.formatMessage({ id: "E501" })}`)
            .max(255)
            .required(`${intl.formatMessage({ id: "E502" })}`),
          password: Yup.string()
            .min(7)
            .max(255)
            .required(`${intl.formatMessage({ id: "E508" })}`),
          policy: Yup.boolean().oneOf(
            [true],
            `${intl.formatMessage({ id: "E507" })}`
          ),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await registering(values.email, values.password).then((data) => {
              navigate("/auth/verify", {
                state: {
                  username: values.email,
                },
              });
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
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
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
            />
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
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
                mt: 2,
              }}
            >
              <Checkbox
                checked={values.policy}
                color='primary'
                name='policy'
                onChange={handleChange}
              />
              <Typography color='textSecondary' variant='body2'>
                {intl.formatMessage({ id: "F43" })}{" "}
                <Link color='primary' href={termLink}>
                  {intl.formatMessage({ id: "F41" })}
                </Link>
              </Typography>
            </Box>
            {Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>{errors.policy}</FormHelperText>
            )}
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button
                color='primary'
                disabled={isSubmitting}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
              >
                {intl.formatMessage({ id: "F42" })}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <SocialSignIn />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/login'>
            {intl.formatMessage({ id: "L66" })}
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link color='textSecondary' to='/auth/recovery'>
            {intl.formatMessage({ id: "F33" })}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default RegisterAmplify;
