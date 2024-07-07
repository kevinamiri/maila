import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Box, Typography, CircularProgress, LinearProgress, CardContent } from "@mui/material";

// Types
type ProgressProps = {
  value: number;
  description?: string;
};

type LinearPProps = {
  progressType: "circular" | "linear";
};

// Helper Components
const CircularProgressWithLabel = ({ value }: ProgressProps) => (
  <Box position="relative" display="inline-flex">
    <CircularProgress variant="determinate" value={value} />
    <Box
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="caption" component="div" color="textSecondary">
        {`${Math.round(value)}`}
      </Typography>
    </Box>
  </Box>
);

const LinearProgressBalance = ({ value, description }: ProgressProps) => (
  <CardContent>
    <LinearProgress sx={{ minWidth: "100px" }} value={value} variant="determinate" />
    <Box sx={{ mt: 1 }}>
      <Typography color="textSecondary" variant="subtitle2">
        {description}
      </Typography>
    </Box>
  </CardContent>
);

// Main Component
const LinearP = ({ progressType }: LinearPProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataUsage = async () => {
      try {
        setLoading(true);
        const user = await Auth.currentAuthenticatedUser();
        const token = (await Auth.currentSession()).getIdToken().getJwtToken();
        
        const response = await fetch("https://api.maila.ai/data-usage", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: user.username }),
        });

        if (!response.ok) throw new Error("Failed to fetch data usage");

        const { characters } = await response.json();
        setProgress(characters);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchDataUsage();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  const normalizedProgress = progress / 500;
  const description = `${Math.round(progress)} of 50000 Characters`;

  return progressType === "circular" ? (
    <CircularProgressWithLabel value={normalizedProgress} />
  ) : (
    <LinearProgressBalance value={normalizedProgress} description={description} />
  );
};

export default LinearP;

// Commented out for potential future use:
// export { LinearProgressBalance };