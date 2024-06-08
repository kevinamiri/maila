import React, { useEffect, useState, memo, FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";
import { Auth } from "aws-amplify";
import HistoryTab from "./HistoryTab";

// Post type
type Post = {
  id: string;
  userQuery: string;
  allUserPost: string;
};

const History: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
  const fetchHistoryData = async () => {
    try {
      const apiUrl = `https://api.maila.ai/history-data`;
      const user = await Auth.currentAuthenticatedUser();
      const params = { username: user.username };
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession())
            .getIdToken()
            .getJwtToken()}`,
        },
        method: "POST",
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Data is not an array");
      }

      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  // Extract values from post object
  const extractValues = (postObject: Record<string, any>): string[] =>
    Object.keys(postObject).map((key) => postObject[key]["S"]);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        p: 3,
      }}
    >
      <Stack sx={{ width: "100%", mb: 4 }} spacing={2}>
        <Alert severity="info">
          This page and its functionality is currently under development, and we
          expect to add more additional features shortly.
        </Alert>
      </Stack>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
          <Skeleton variant="rectangular" width="100%" height={60} />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Stack spacing={2}>
          {posts.map((post, index) => {
            return (
              <Card key={post.id + index}>
                <Divider />
                <Box p={2}>
                  <HistoryTab postContents={post.allUserPost} input={post.userQuery}/>
                </Box>
              </Card>
            );
          })}
        </Stack>
      )}
    </Box>
  );
};

export default memo(History);
