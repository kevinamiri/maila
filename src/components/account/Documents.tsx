import type { FC } from "react";
import React, { useState, useEffect } from "react";
import { formatDistanceToNowStrict, subHours, subMinutes } from "date-fns";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Auth } from "aws-amplify";

const Documents: FC = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const theUrl = `https://api.maila.ai/get-saved-data`;
    const user = await Auth.currentAuthenticatedUser();
    let params = {};
    params["username"] = user.username;
    const response = await fetch(theUrl, {
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

  React.useEffect(() => {
    fetchData().then(setPosts);
  }, []);

  const createdAt = subHours(new Date(), 1);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        p: 3,
      }}
    >
      <Card>
        <CardHeader title='posts Summary' />
        <Divider />
        <Table>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.id}
                sx={{
                  "&:last-child td": {
                    border: 0,
                  },
                }}
              >
                <TableCell>
                  <Typography sx={{ cursor: "pointer" }} variant='h5'>
                    {post.id}
                  </Typography>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        height: 4,
                        width: 4,
                        borderRadius: 4,
                        backgroundColor: "text.secondary",
                        mx: 1,
                      }}
                    />
                    <Typography color='textSecondary' variant='body1'>
                      {formatDistanceToNowStrict(createdAt, {
                        addSuffix: true,
                      })}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell align='right'>
                  <Button size='small' variant='outlined'>
                    View
                  </Button>
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
