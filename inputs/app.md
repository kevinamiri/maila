### Observations

The user wants to add a "call to action" (CTA) feature to the homepage. This feature should allow users to register for a waiting list by submitting their email address to a specified API endpoint. The current CTA button on the homepage is a placeholder and needs to be made functional.

### Problem

The main CTA button on the homepage is static and does not trigger any action. The goal is to implement a waiting list registration modal that opens when this button is clicked, captures a user's email, and sends it to the provided API.

### Goal

To implement a complete waiting list registration feature on the homepage. This involves creating a new dialog component for the form, integrating it with the existing hero section, handling the form submission and API call, and providing user feedback on success or failure.

<thinking type="strategic thinker">
The request involves both frontend UI changes and backend API interaction. My strategy is to encapsulate the new functionality into a self-contained component to maintain code organization and reusability.

1.  **Component Encapsulation:** I will create a new component, `WaitlistDialog.tsx`, specifically for the waiting list form. This component will manage its own form state, validation, and API submission logic. This follows the principle of separation of concerns.
2.  **Form Management:** I will use `Formik` and `Yup` for form handling, as this is a consistent pattern throughout the existing codebase (e.g., `ContactForm.tsx`). This ensures maintainability and follows established conventions.
3.  **State Management:** The visibility of the dialog will be controlled by the parent component, `HomeHeroPage.tsx`, using a simple `useState` hook. This keeps the parent component in control of its children's presentation.
4.  **API Integration:** The `WaitlistDialog` will use the `fetch` API to send a `POST` request as specified in the `curl` command provided by the user. I will implement this with `async/await` and robust `try/catch` error handling.
5.  **User Feedback:** The application already uses `notistack` for notifications, as seen in `gatsby-browser.tsx` and other components. I will leverage the `useSnackbar` hook to provide clear, non-intrusive feedback to the user after they submit the form.
6.  **Integration:** I will modify the existing `HomeHeroPage.tsx` to include the `WaitlistDialog` and connect its visibility to the main CTA button's `onClick` event. This will seamlessly integrate the new feature into the existing user flow.

This approach ensures the new feature is modular, maintainable, and consistent with the existing architecture and coding style of the project.
</inner_monologue>

### Actions

1.  Create a new file `src/components/homepage/WaitlistDialog.tsx` to house the registration modal.
2.  Implement the dialog using MUI components, with a form managed by `Formik` for email input and validation.
3.  Add logic within the dialog to handle the `POST` request to `https://speech.maila.ai/api/wait-list`.
4.  Integrate `useSnackbar` to provide feedback upon successful or failed submission.
5.  Modify `src/components/landings/HomeHeroPage.tsx` to manage the state of the `WaitlistDialog`.
6.  Update the main CTA button in `HomeHeroPage.tsx` to trigger the opening of the dialog.

---

### Solution

Here are the code changes to implement the waiting list feature.

#### New Component: Waitlist Dialog

A new component is created to handle the waiting list registration form and API call.

```typescript:src/components/homepage/WaitlistDialog.tsx
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';

// --------------------------- 💅 Interfaces ----------------------------------
interface WaitlistDialogProps {
  open: boolean;
  onClose: () => void;
}

// --------------------------- 📜 Component -----------------------------------
const WaitlistDialog: React.FC<WaitlistDialogProps> = ({ open, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Join the Waitlist</DialogTitle>
      <Formik
        initialValues={{
          email: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            const response = await fetch('https://speech.maila.ai/api/wait-list', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: values.email }),
            });

            if (!response.ok) {
              const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred.' }));
              throw new Error(errorData.message || 'Something went wrong');
            }

            setStatus({ success: true });
            setSubmitting(false);
            resetForm();
            onClose();
            enqueueSnackbar('Successfully joined the waitlist!', { variant: 'success' });
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Be the first to know when we launch. Enter your email below to join our waiting list.
              </Typography>
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
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{typeof errors.submit === 'string' ? errors.submit : 'An unexpected error occurred.'}</FormHelperText>
                </Box>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default WaitlistDialog;
```

#### Modified Component: Home Hero Page

The hero section component is updated to control and display the new waiting list dialog.

```typescript:src/components/landings/HomeHeroPage.tsx
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TypingEffect from "./TypingEffect";
import WaitlistDialog from "../homepage/WaitlistDialog";

// --------------------------- 💅 Interfaces ----------------------------------
type Props = {
  title?: string;
  header?: string;
  cta?: string;
  labelbutton?: string;
  helpernotice?: string;
};

// --------------------------- 🛠️ Utils -------------------------------------
const splitText = {
  firstTwo: (text: string) => text.split(" ").slice(0, 2).join(" "),
  afterTwo: (text: string) => text.split(" ").slice(2).join(" "),
};

// --------------------------- 📦 Defaults -----------------------------------
const defaults = {
  header: "the here text",
  title: "the hero title",
  labelbutton: "Button name",
  cta: "Start writing with your first 10,000 words free trial and see if your work improves.",
  helpernotice: "These results are pre-generated and fully powered by AI",
} as const;

// --------------------------- 🎨 Styles ------------------------------------
const styles = {
  container: {
    display: "flex !important",
    backgroundColor: (theme) => theme.palette.background.paper,
    marginTop: "4rem",
  },
  contentBox: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  header: {
    margin: "3rem",
    backgroundColor: (theme) => theme.palette.background.paper,
  },
  titleWrapper: {
    display: "flex",
    flexWrap: "wrap",
    mb: "1rem",
  },
  button: {
    color: "white",
  },
  typingEffect: {
    position: "absolute",
    zIndex: 100,
    alignContent: "center",
    top: "0",
    width: "77%",
    right: "17%",
    marginTop: "19%",
  },
} as const;

// --------------------------- 📜 Component -----------------------------------
const HomeHeroPage: React.FC<Props> = ({
  header = defaults.header,
  title = defaults.title,
  labelbutton = defaults.labelbutton,
  cta = defaults.cta,
  helpernotice = defaults.helpernotice,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <>
      <Grid container sx={styles.container} component="section">
        {/* Left Content */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ marginTop: "4rem", backgroundColor: (theme) => theme.palette.background.paper }}
        >
          <Box sx={styles.contentBox}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
            >
              <Grid
                item
                sx={styles.header}
                justifyContent="center"
                alignContent="center"
                component="header"
              >
                <Box sx={styles.titleWrapper}>
                  <Typography color="primary" variant="h1">
                    {splitText.firstTwo(title) + " "}
                    <Typography color="success.main" variant="h1" component="span">
                      {splitText.afterTwo(title)}
                    </Typography>
                  </Typography>
                </Box>
                <Typography color="text.secondary" variant="body2">
                  {header}
                </Typography>
                <Typography
                  sx={{ mt: 1 }}
                  color="text.secondary"
                  variant="body2"
                  component="h2"
                >
                  {cta}
                </Typography>
              </Grid>

              <Grid sx={{ mb: 3 }} item justifyContent="center" alignContent="center">
                <Button variant="contained" onClick={handleOpenDialog}>
                  <Typography variant="body2" sx={styles.button}>
                    {labelbutton}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right Content - SVG and TypingEffect */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={10}
          xs={12}
          sx={{ display: matches ? "flex !important" : "block !important" }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <svg
              width='100%'
              height='100%'
              aria-label='logo'
              viewBox='0 0 3517 3075'
              version='1.1'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              xmlSpace='preserve'
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <g>
                <circle
                  cx='2789.91'
                  cy='2887.5'
                  r={188}
                  style={{ fill: "#75e3ea" }}
                />
                <circle
                  cx='1496.95'
                  cy='2737.5'
                  r={200}
                  style={{ fill: "#ffc278" }}
                />
                <circle
                  cx='2458.33'
                  cy='1297.08'
                  r={1000}
                  style={{ fill: "rgba(86, 248, 211, 0.86)" }}
                />
                <circle
                  cx='1600.95'
                  cy='2057.5'
                  r={1000}
                  style={{ fill: "rgba(255, 177, 230, 0.7)" }}
                />
                <circle
                  cx='1596.95'
                  cy='1157.5'
                  r={1000}
                  style={{ fill: "rgba(86, 100, 210, 0.8)" }}
                />
              </g>
            </svg>
            <Box sx={styles.typingEffect}>
              {/* <TypingEffect helpernote={helpernotice} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <WaitlistDialog open={dialogOpen} onClose={handleCloseDialog} />
    </>
  );
};

export default HomeHeroPage;
```

<reflections>
The changes successfully implement the requested feature. I created a new, reusable component (`WaitlistDialog.tsx`) for the form, which keeps the logic isolated and the codebase clean. Using `Formik` and `Yup` aligns with the project's existing patterns for form handling. Modifying `HomeHeroPage.tsx` to manage the dialog's state is a standard React pattern and integrates the new feature smoothly. The use of `notistack` for user feedback provides a consistent user experience. The solution is modular, follows best practices, and directly addresses the user's goal.
</reflections>

<critical_thinking>
Critical: The error handling in the `WaitlistDialog` could be more specific. If the API returns structured error messages (e.g., `{"errors": {"email": "This email is already registered"}}`), the code could parse these and display them as field-specific errors in the form instead of a generic snackbar message. The current implementation shows a general error in `FormHelperText`, which is good, but could be enhanced. Impact: (6/10)
Suggestion: The API endpoint URL `https://speech.maila.ai/api/wait-list` is hardcoded. It would be better to store this in an environment variable (e.g., in `.env.development` and `.env.production` files) to allow for different endpoints in different environments (dev, staging, prod). This improves configurability and security. Impact: (8/10)
Critical: The `WaitlistDialog` component is placed inside `src/components/homepage/`. While logical, if this waitlist feature were to be used in other parts of the application, it might be better placed in a more general location like `src/components/dialogs/` or `src/sections/waitlist/`. For its current single use-case, the location is acceptable. Impact: (4/10)
</critical_thinking>

<next_steps>
1.  **Refactor API URL:** Move the hardcoded API endpoint `https://speech.maila.ai/api/wait-list` into environment variables (`GATSBY_WAITLIST_API_URL`) and access it via `process.env`. Priority: (9/10)
2.  **Improve Error Handling:** Update the `catch` block in `WaitlistDialog.tsx` to parse JSON from failed API responses and set form-specific errors using `setErrors` from Formik if the API provides them. Priority: (7/10)
3.  **Add Loading State to Button:** The "Join Waitlist" button text changes to "Submitting...", which is good. A visual loading indicator (like MUI's `LoadingButton`) could further improve the user experience. Priority: (6/10)
</next_steps>

### Changed Files

-   `src/components/landings/HomeHeroPage.tsx` (Modified)
-   `src/components/homepage/WaitlistDialog.tsx` (New)