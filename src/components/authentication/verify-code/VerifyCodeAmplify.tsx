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
import { useSnackbar } from "notistack";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { useIntl } from "react-intl";
import Link from "../../../components/Link";

interface LocationState {
  username?: string;
}


const CodeVerification = () => {
  const isMountedRef = useIsMountedRef();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const codeInputsRef = useRef([]);
  const intl = useIntl();

  const locationState = location.state as LocationState;


  useEffect(() => {
    // Limit the number of code inputs
    codeInputsRef.current = codeInputsRef.current.slice(0, 6);
  }, []);

  const handleCodeSubmit = async (values, actions) => {
    try {
      await Auth.confirmSignUp(values.email, values.code.join(""));
      enqueueSnackbar(intl.formatMessage({ id: "UseEmailAndPasswordCreated" }), { variant: "success" });
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
      if (isMountedRef.current) {
        actions.setStatus(true);
        actions.setErrors({ submit: error.message });
        actions.setSubmitting(false);
      }
    }
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
        <Typography color='textPrimary' gutterBottom variant='h4'>
          {intl.formatMessage({ id: "F32" })}
        </Typography>
      </Box>
      <Formik
        initialValues={{
          email: locationState?.username || "",
          code: ["", "", "", "", "", ""],
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(intl.formatMessage({ id: "E501" }))
            .max(255)
            .required(intl.formatMessage({ id: "E502" })),
          code: Yup.array().of(Yup.string().required(intl.formatMessage({ id: "E503" }))),
        })}
        onSubmit={handleCodeSubmit}
      >
        {formikProps => (
          <form noValidate onSubmit={formikProps.handleSubmit}>
            <EmailInput {...formikProps} location={location} intl={intl} />
            <CodeInputFields {...formikProps} codeInputsRef={codeInputsRef} intl={intl} />
            <SubmitButton isSubmitting={formikProps.isSubmitting} intl={intl} />
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
      <NavigationLinks intl={intl} />
    </>
  );
};

const EmailInput = ({ errors, handleBlur, handleChange, touched, values, location, intl }) => {
  return !location.state?.username ? (
    <TextField
      id='email'
      autoFocus
      error={Boolean(touched.email && errors.email)}
      fullWidth
      helperText={touched.email && typeof errors.email === 'string' ? errors.email : ''}
      label={intl.formatMessage({ id: "F44" })}
      margin='normal'
      name='email'
      onBlur={handleBlur}
      onChange={handleChange}
      type='email'
      value={values.email}
      variant='outlined'
    />
  ) : (
    <TextField
      id='username'
      disabled
      fullWidth
      margin='normal'
      value={location.state.username}
      variant='outlined'
    />
  );
};

const CodeInputFields = ({ errors, handleBlur, setFieldValue, touched, values, codeInputsRef, intl }) => {
  return (
    <>
      <Typography color='textSecondary' sx={{ mb: 2, mt: 3 }} variant='subtitle2'>
        {intl.formatMessage({ id: "F39" })}
      </Typography>
      <Box
        sx={{
          display: "grid",
          columnGap: "16px",
          gridTemplateColumns: "repeat(6, 1fr)",
          pt: 1,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <CodeInput
            key={`code-${i}`}
            codeIndex={i}
            errors={errors}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            touched={touched}
            value={values.code[i]}
            codeInputsRef={codeInputsRef}
          />
        ))}
      </Box>
      {Boolean(touched.code && errors.code) && (
        <FormHelperText error sx={{ mx: "14px" }}>
          {errors.code}
        </FormHelperText>
      )}
    </>
  );
};


const CodeInput = ({ codeIndex, errors, handleBlur, setFieldValue, touched, value, codeInputsRef }) => {
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !value) {
      // Move to previous field if current is empty
      if (index > 0) {
        codeInputsRef.current[index - 1].focus();
      }
    } else if (event.key >= "0" && event.key <= "9") {
      // Allow numeric values and move to next field
      setFieldValue(`code[${index}]`, event.key);
      if (index < 5) {
        codeInputsRef.current[index + 1].focus();
      }
    } else {
      // Prevent non-numeric input
      event.preventDefault();
    }
  };

  const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData("text").split("");
    if (pasteData.length === 6 && pasteData.every(char => char >= "0" && char <= "9")) {
      // If paste data is exactly 6 numeric characters, distribute them to the fields
      pasteData.forEach((char, i) => {
        setFieldValue(`code[${i}]`, char);
      });
      codeInputsRef.current[5].focus(); // Focus on the last field
    }
    event.preventDefault();
  };

  return (
    <TextField
      id={`code-${codeIndex}`}
      error={Boolean(touched.code && errors.code)}
      fullWidth
      inputRef={(el) => (codeInputsRef.current[codeIndex] = el)}
      name={`code[${codeIndex}]`}
      onBlur={handleBlur}
      onKeyDown={(event) => handleKeyDown(event, codeIndex)}
      onPaste={handlePaste}
      value={value}
      sx={{
        display: "inline-block",
        textAlign: "center",
        "& .MuiInputBase-input": {
          textAlign: "center",
        },
      }}
      variant='outlined'
    />
  );
};


const SubmitButton = ({ isSubmitting, intl }) => (
  <Box sx={{ mt: 3 }}>
    <Button
      color='primary'
      disabled={isSubmitting}
      fullWidth
      size='large'
      type='submit'
      variant='contained'
    >
      {intl.formatMessage({ id: "F31" })}
    </Button>
  </Box>
);

const NavigationLinks = ({ intl }) => (
  <Box sx={{ display: "flex", p: 1 }}>
    <Box sx={{ p: 1, flexGrow: 1 }}>
      <Link color='textSecondary' to='/auth/Recovery'>
        {intl.formatMessage({ id: "F30" })}
      </Link>
    </Box>
    <Box sx={{ p: 1 }}>
      <Link color='textSecondary' to='/auth/login'>
        {intl.formatMessage({ id: "L66" })}
      </Link>
    </Box>
  </Box>
);

export default CodeVerification;
