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