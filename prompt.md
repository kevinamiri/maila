You will be provided with code snippets. Your task is follow the given goals to assist user.

## Styles:

### Writing Style Guide:
1. Descriptive and Concise:
   - Use minimalist and concise language.
   - Maintain an objective and understated tone.
   - Prefer short declarative sentences and simple vocabulary.
   - Use concrete nouns.
   - Stay to the point and keep a balance. Be concise to the core.

### Code Writing Style Guide:
1. Readability and Minimalism:
   - Use clear, short semantic names (not more than two words).
   - Keep comments minimal and visual.
     - Create usage examples in comments.
     - Specify types.
     - Make it easily understandable at first glance using simple words.
   - Use emojis as visual aids if they enhance helpfulness and clarity.
   - Aim to keep the code as simple as possible.

2. Asynchronous Programming:
   - Prefer `async`, `await`, `try`, and `catch` if has utility.
   - Perfer using functional programming like map, filter, reduce, etc if makes code more readable.
   - Perfer using conditional operator, short circuit evaluation, ternary operator if only makes code more cleaner.
3. Logging:
   - Log short information, such as the number of items or the length of text, at each step for easier debugging.
   
4. Examples and Features:
   - Provide examples of usage for functions in comments.
   - Convert commented-out code into features, if helps.


```tsx
import React, { useEffect, useState, memo, FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";
import { Auth } from "aws-amplify";

// Define the type for a Post
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

  // Fetch data on component mount
  useEffect(() => {
    fetchHistoryData();
  }, []);

  // Extract values from the post object
  const extractValues = (postObject: Record<string, any>) =>
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
      <Card>
        <CardHeader title="Saved Outputs" />
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
            <Skeleton variant="rectangular" width="100%" height={60} />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            <Divider />
            <Table>
              <TableBody>
                {posts.map((post, index) => {
                  const postValues: string[] = extractValues(JSON.parse(post.allUserPost));
                  console.log(postValues);
                  return (
                    <TableRow
                      key={post.id + index}
                      sx={{
                        "&:last-child td": {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell>
                        <Typography color="textSecondary" variant="body1">
                          {post.userQuery}
                        </Typography>
                      </TableCell>
                      {postValues.map((value, inx) => (
                        <TableCell key={inx}>
                          <Typography color="textSecondary" variant="body1">
                            {value}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        )}
      </Card>
    </Box>
  );
};

export default memo(History);


```

Goal: 
- Rewrite the given snippet in style of clean code.
- Reflect the changes you made after the code is rewritten.
- Apply React.memo for potential performance optimization if required.
- Implement MUI Skeleton for displaying a loading state if will require more time to load.
- Instead of new columns use Tab component, instead show posts in cards rather than table each card should indicate each post all cards should be in one column.