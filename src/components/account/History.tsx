import type { FC } from "react";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Auth } from "aws-amplify";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";

// Define the type for a Post
type Post = {
  id: string;
  userQuery: string;
  allUserPost: string;
};

const History: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  const fetchHistoryData = async () => {
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
    const data = await response.json();
    return data;
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchHistoryData().then(setPosts);
    setLoading(false);
  }, []);

  // Extract values from the post object
  const extractValues = (postObject: object) => {
    const values = [];
    for (const key in postObject) {
      if (postObject.hasOwnProperty(key)) {
        values.push(postObject[key]["S"]);
      }
    }
    return values;
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        p: 3,
      }}
    >
      <Stack sx={{ width: "100%", mb: 4 }} spacing={2}>
        <Alert severity='info'>
          This page and its functionality is currently under development, and we
          expect to add more additional features shortly.
        </Alert>
      </Stack>
      <Card>
        <CardHeader title='Saved Outputs' />
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : null}
        <Divider />
        <Table>
          <TableBody>
            {posts &&
              posts.map((post, index) => {
                const postValues = extractValues(JSON.parse(post.allUserPost));
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
                      <Typography color='textSecondary' variant='body1'>
                        {post.userQuery}
                      </Typography>
                    </TableCell>

                    {postValues.map((value, inx) => {
                      return (
                        <TableCell key={inx}>
                          <Typography color='textSecondary' variant='body1'>
                            {value}
                          </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default History;
