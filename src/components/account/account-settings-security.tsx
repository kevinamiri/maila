import React from "react";
import * as Yup from "yup";
import { Formik, FormikHelpers } from "formik";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Auth } from "aws-amplify";

// --- Types ----------------------------------
interface FormValues {
  oldPassword: string;
  newPassword: string;
  passwordConfirm: string;
  submit: string | null;
}

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

// --- Validation Schema ----------------------
const validationSchema: Yup.SchemaOf<Omit<FormValues, "submit">> = Yup.object({
  newPassword: Yup.string()
    .min(7, "Must be at least 7 characters")
    .max(255)
    .required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Required"),
});

// --- Component ------------------------------
const AccountSecuritySettings: React.FC<Props> = ({ ...props }) => {
  const { enqueueSnackbar } = useSnackbar();

  // 🔒 handle password change
  const handleSubmit = async (
    values: FormValues,
    { resetForm, setErrors, setStatus, setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, values.oldPassword, values.newPassword);
      setStatus({ success: true });
      enqueueSnackbar("Password updated", {
        anchorOrigin: { horizontal: "right", vertical: "top" },
        variant: "success",
      });
      resetForm();
    } catch (err: any) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik<FormValues>
      initialValues={{
        oldPassword: "",
        newPassword: "",
        passwordConfirm: "",
        submit: null,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
        <form onSubmit={handleSubmit} {...props}>
          <Card>
            <CardHeader title="Change Password" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                {/* 🔑 Old Password */}
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    name="oldPassword"
                    label="Old Password"
                    type="password"
                    value={values.oldPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.oldPassword && errors.oldPassword)}
                    helperText={touched.oldPassword && errors.oldPassword}
                  />
                </Grid>
                {/* 🔒 New Password */}
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    name="newPassword"
                    label="New Password"
                    type="password"
                    value={values.newPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                  />
                </Grid>
                {/* 🔄 Confirm Password */}
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    name="passwordConfirm"
                    label="Password Confirmation"
                    type="password"
                    value={values.passwordConfirm}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(
                      touched.passwordConfirm && errors.passwordConfirm
                    )}
                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                  />
                </Grid>
              </Grid>
              {typeof errors.submit === "string" && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                type="submit"
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
