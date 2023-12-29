Rewrite the following code snippet according to the following guidelines:

Guidelines:

- Use meaningful semantic names. (No more than two words)
- Only break code into smaller functions if necessary. Avoid unnecessary complexity.
- Use comments wisely. Good code mostly documents itself. Comments should be used to explain why something is done, not how.
- Use async/await instead of promises, try catch instead of .catch
- Consistent formatting improves readability. This includes indentation, spacing, and organizing code in a logical order.

import React, { useEffect, useRef } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import \* as Yup from "yup";
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

const VerifyCodeAmplify = () => {
const isMountedRef = useIsMountedRef();
const location = useLocation();
const { enqueueSnackbar } = useSnackbar();
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
        }} >
<div>
<Typography color='textPrimary' gutterBottom variant='h4'>
{intl.formatMessage({ id: "F32" })}
</Typography>
</div>
</Box>
<Formik
initialValues={{
          email: location.state?.username || "",
          code: ["", "", "", "", "", ""],
          submit: null,
        }}
validationSchema={Yup.object().shape({
email: Yup.string()
.email(`${intl.formatMessage({ id: "E501" })}`)
.max(255)
.required(`${intl.formatMessage({ id: "E502" })}`),
code: Yup.array().of(
Yup.string().required(`${intl.formatMessage({ id: "E503" })}`)
),
})}
onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
try {
await Auth.confirmSignUp(values.email, values.code.join(""));
enqueueSnackbar(`${intl.formatMessage({ id: "E509" })}`, {
variant: "success",
});
navigate("/auth/login");
} catch (err) {
console.error(err);
if (isMountedRef.current) {
setStatus(true);
setErrors({ submit: err.message });
setSubmitting(false);
}
}
}} >
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
{!location.state?.username ? (
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
value={location && location.state && (location.state as any).username ? (location.state as any).username : ''}
variant='outlined'
/>
)}
<Typography
color='textSecondary'
sx={{
                mb: 2,
                mt: 3,
              }}
variant='subtitle2' >
{intl.formatMessage({ id: "F39" })}
</Typography>
<Box
sx={{
                display: "grid",
                columnGap: "16px",
                gridTemplateColumns: "repeat(7, 1fr)",
                pt: 1,
              }} >
{[1, 2, 3, 4, 5, 6].map((ref, i) => (
<TextField
id={`code-${i}`}
error={Boolean(
Array.isArray(touched.code) &&
touched.code.length === 6 &&
errors.code
)}
fullWidth
inputRef={(el) => (itemsRef.current[i] = el)}
key={`code-${i}`}
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
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit.toString()}</FormHelperText>
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
                {intl.formatMessage({ id: "F31" })}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Divider sx={{ my: 3 }} />
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
    </>

);
};

export default VerifyCodeAmplify;

```

```
