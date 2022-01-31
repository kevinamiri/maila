import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  Switch,
  TextField,
  FormHelperText,
  Typography,
} from "@mui/material";
import TransitionAlerts from "./TransitionAlerts";
import Collapse from "@mui/material/Collapse";
import { FormattedMessage } from "react-intl";

const wait = (time) => new Promise((res) => setTimeout(res, time));

const ContactForm = (props) => {
  const { customers, ...other } = props;
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const lang = props.lang;
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        phone: "",
        message: "",
        isVerified: false,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        name: Yup.string().max(255).required("Name is required"),
        phone: Yup.string().max(15),
        isVerified: Yup.bool(),
        message: Yup.string().max(2595),
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          // NOTE: Make API request
          const theUrl = `https://searchquote.azurewebsites.net/api/comments`;
          let params = {};
          params["email"] = values.email;
          params["name"] = values.name;
          params["comment"] = values.message;
          const regData = JSON.stringify(params);
          const response = await fetch(theUrl, {
            method: "POST",
            body: regData,
          });
          const data = await response.json();
          await wait(500);
          resetForm();
          setStatus({ success: true });
          setOpen(true);
          setMessage(data.message);
          setSubmitting(false);
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
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
        <form onSubmit={handleSubmit} {...other}>
          <Card>
            <Box
              sx={{
                p: 2,
                boxShadow: (theme) => theme.shadows[5],
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      mb: 1,
                    }}
                    variant='subtitle1'
                    color='primary'
                  >
                    <FormattedMessage id='CA094' />
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label={<FormattedMessage id='N001' />}
                    name='name'
                    size='small'
                    InputLabelProps={{ shrink: true }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant='outlined'
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label={<FormattedMessage id='E002' />}
                    name='email'
                    InputLabelProps={{ shrink: true }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    size='small'
                    value={values.email}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(touched.message && errors.message)}
                    helperText={touched.message && errors.message}
                    label={<FormattedMessage id='M003' />}
                    name='message'
                    fullWidth
                    size='small'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    multiline
                    value={values.message}
                    variant='outlined'
                    InputLabelProps={{ shrink: true }}
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TransitionAlerts state={[open, setOpen]} message={message} />
                  <Collapse in={!open}>
                    <FormHelperText>
                      <FormattedMessage id='CF005' />
                      <Link href={`/${lang}/legal/terms`}>
                        <FormattedMessage id='TAS025' />
                      </Link>
                    </FormHelperText>
                  </Collapse>
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Button
                  color='primary'
                  disabled={isSubmitting}
                  type='submit'
                  variant='contained'
                >
                  <FormattedMessage id='SF010' />
                </Button>
              </Box>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
