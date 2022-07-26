import type { FC } from "react";
import React, { useState } from "react";
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
import { Node as SlateNode } from "slate";

export const serialize = (children) => {
  return children.map((x) => SlateNode.string(x)).join("\n");
};

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
    const values = Object.values(data).filter((x) => {
      return x.userData !== undefined;
    });
    console.log(values);
    return values;
  };

  React.useEffect(() => {
    fetchData().then(setPosts);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        p: 3,
      }}
    >
      <Card>
        <CardHeader title='Saved Outputs' />
        <Divider />
        <Table>
          <TableBody>
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
                    {serialize(post.userData)}{" "}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Button size='small' variant='outlined' disabled={true}>
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
