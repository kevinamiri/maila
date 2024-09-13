import React, { useState, useEffect } from 'react';
import { Button, Snackbar, Slide, SlideProps } from '@mui/material';

// DirectionSnackbar: Displays a message in a Snackbar with directional animation
type DirectionSnackbarProps = {
  message: string;
  running: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

const DirectionSnackbar: React.FC<DirectionSnackbarProps> = ({ message, running }) => {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState<React.ComponentType<SlideProps> | undefined>(undefined);
  const [run, setRun] = running;
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setTransition(() => (props: SlideProps) => <Slide {...props} direction="right" />);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (run) {
      setLoading(true);
      // Simulating an async operation
      setTimeout(() => {
        handleClick();
        setLoading(false);
      }, 1000);
    }
  }, [run]);

  // Error handling example
  useEffect(() => {
    if (error) {
      console.error('An error occurred:', error);
      setOpen(true);
    }
  }, [error]);

  return (
    <div>
      <Button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Show Snackbar'}
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={error || message}
        key={transition ? transition.name : ''}
      />
    </div>
  );
};

export default DirectionSnackbar;

// Usage example:
// <DirectionSnackbar message="Hello, World!" running={[isRunning, setIsRunning]} />