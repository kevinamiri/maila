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
import { Node as SlateNode } from "slate";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

// Function to serialize children nodes
export const serializeNodes = (children: SlateNode[]): string => {
  return children.map((node) => SlateNode.string(node)).join("\n");
};

interface MyDataType {
  userData: any; // replace 'any' with the actual type of 'userData' if known
  // other properties...
}

const Documents: FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch data from the API
  const fetchData = async () => {
    const apiUrl = `https://api.maila.ai/get-saved-data`;
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
    const validValues = Object.values(data).filter(
      (value: MyDataType) => value.userData !== undefined
    );
    return validValues;
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData().then(setPosts);
    setLoading(false);
  }, []);

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
          This page and it's functionality is currently under development, and
          we expect to add the more additional features shortly.
        </Alert>
      </Stack>
      <Card>
        <CardHeader title='Saved Outputs' />
        <Divider />
        <Table>
          <TableBody>
            <Typography
              sx={{ mb: 4 }}
              color='primary'
              gutterBottom
              variant='body1'
            >
              {loading ? "Loading..." : ""}
            </Typography>
            {posts.map((post) => (
              <TableRow
                key={post.generatedAt}
                sx={{
                  "&:last-child td": {
                    border: 0,
                  },
                }}
              >
                <TableCell>
                  <Typography sx={{ cursor: "pointer" }} variant='caption'>
                    {post.generatedAt}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color='textSecondary' variant='body1'>
                    {serializeNodes(post.userData)}{" "}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default Documents;
