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
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { Auth } from "aws-amplify";
import { Node as SlateNode } from "slate";

// Serialize Slate nodes to string
const serializeNodes = (children: SlateNode[]): string => 
  children.map(SlateNode.string).join("\n");

interface UserData {
  userData: SlateNode[];
  generatedAt: string;
  // other properties...
}

const Documents: FC = React.memo(() => {
  const [posts, setPosts] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from API
  const fetchData = async (): Promise<UserData[]> => {
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
    return Object.values(data).filter(
      (value: any): value is UserData => value.userData !== undefined
    );
  };

  useEffect(() => {
    fetchData().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100%", p: 3 }}>
      <Stack sx={{ width: "100%", mb: 4 }} spacing={2}>
        <Alert severity='info'>
          This page and its functionality is currently under development, and we expect to add more features shortly.
        </Alert>
      </Stack>
      <Card>
        <CardHeader title='Saved Outputs' />
        <Divider />
        <Table>
          <TableBody>
            {loading ? (
              Array.from(new Array(5)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton /></TableCell>
                  <TableCell><Skeleton /></TableCell>
                </TableRow>
              ))
            ) : (
              posts.map((post) => (
                <TableRow key={post.generatedAt} sx={{ "&:last-child td": { border: 0 } }}>
                  <TableCell>
                    <Typography sx={{ cursor: "pointer" }} variant='caption'>
                      {post.generatedAt}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color='textSecondary' variant='body1'>
                      {serializeNodes(post.userData)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
});

export default Documents;
