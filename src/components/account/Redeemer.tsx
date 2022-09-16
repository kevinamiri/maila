import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Auth } from "aws-amplify";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Collapse from "@mui/material/Collapse";
import TransitionAlerts from "components/homepage/TransitionAlerts";

const wait = (time) => new Promise((res) => setTimeout(res, time));

const Redeemer = (props) => {
  const { customers, ...other } = props;
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const lang = props.lang;
  return (
    <Formik
      initialValues={{
        voucher: "",
        message: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        voucher: Yup.string().max(855),
        message: Yup.string().max(855),
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          const theUrl = `https://api.maila.ai/redeem`;
          let params = {};
          params["voucher"] = values.voucher;
          const regData = JSON.stringify(params);
          const response = await fetch(theUrl, {
            headers: {
              Authorization: `Bearer ${(await Auth.currentSession())
                .getIdToken()
                .getJwtToken()}`,
            },
            method: "POST",
            body: regData,
          });
          const data = await response.json();
          await wait(500);
          console.log(data.message);
          setMessage(data.message);
          setData(data);
          setStatus({ success: true });
          setOpen(true);
          setSubmitting(false);
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setOpen(true);
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
        <Box
          sx={{
            backgroundColor: "background.paper",
            minHeight: "100%",
            p: 3,
          }}
        >
          <Box
            sx={{
              pb: 3,
              pt: 2,
              px: 2,
            }}
          >
            <form onSubmit={handleSubmit} {...other}>
              <Box sx={{ mt: 2 }}>
                <TextField
                  error={Boolean(touched.voucher && errors.voucher)}
                  fullWidth
                  helperText={touched.voucher && errors.voucher}
                  name='voucher'
                  placeholder='Discount Code'
                  size='medium'
                  sx={{ mt: 2 }}
                  InputLabelProps={{ shrink: true }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  value={values.voucher}
                  variant='outlined'
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 2,
                }}
              >
                <Button
                  disabled={isSubmitting}
                  sx={{ mt: 2 }}
                  type='submit'
                  variant='contained'
                >
                  Redeem
                </Button>
              </Box>
            </form>
          </Box>
          <Collapse in={!open}>
            <FormHelperText>{message}</FormHelperText>
          </Collapse>
          <TransitionAlerts
            state={[open, setOpen]}
            color={data["data"] ? "success" : "warning"}
            message={message}
          />
        </Box>
      )}
    </Formik>
  );
};

export default Redeemer;
