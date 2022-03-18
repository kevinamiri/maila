import React from "react";
import { navigate } from "gatsby";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { Auth } from "aws-amplify";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { useIntl } from "react-intl";
import Link from "../../Link";

const PasswordRecoveryAmplify = () => {
  const intl = useIntl();
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
            {intl.formatMessage({ id: "F35" })}
          </Typography>
        </div>
      </Box>
      <Formik
        initialValues={{
          email: "",
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
            await Auth.forgotPassword(values.email).then((seccessful) => {
              let { CodeDeliveryDetails } = seccessful;
              let emailDestination = CodeDeliveryDetails.Destination;
              setStatus({ success: true });
              setErrors({ submit: seccessful.message });
              setSubmitting(true);
              navigate("/auth/reset", {
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
              autoFocus
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
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
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
                {intl.formatMessage({ id: "F35" })}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Link color='textSecondary' to='/auth/login'>
            {intl.formatMessage({ id: "L66" })}
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

export default PasswordRecoveryAmplify;
