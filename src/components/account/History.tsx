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
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";

// export const serialize = (children) => {
//   return children.map((x) => SlateNode.string(x)).join("\n");
// };

const History: FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const theUrl = `https://api.maila.ai/history-data`;
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
    // console.log(data);
    return data;
  };

  React.useEffect(() => {
    fetchData().then(setPosts);
    setLoading(false);
  }, []);

  function getValues(obj) {
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(obj[key]["S"]);
      }
    }
    return arr;
  }

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
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : null}
        <Divider />
        <Table>
          <TableBody>
            {posts &&
              posts.map((post, inx) => {
                const bb = getValues(JSON.parse(post.allUserPost));
                console.log(bb);
                return (
                  <TableRow
                    key={post.id + inx}
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

                    {bb.map((x) => {
                      return (
                        <TableCell>
                          <Typography color='textSecondary' variant='body1'>
                            {x}
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
