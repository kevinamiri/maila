import * as React from "react";
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
import CheckoutButton from "./account-settings-checkout-button";

interface UserCardDetailsListProps {
  title: string;
  emailLabel: string;
  email: string;
  name1: string;
  value1: string;
  name2: string;
  value2: string;
  userType: React.ReactNode;
  userTypeLabel: string;
  upgradeLabel?: string;
}

const UserCardDetailsList: React.FC<UserCardDetailsListProps> = (props) => {
  const {
    title,
    emailLabel,
    email,
    name1,
    value1,
    name2,
    value2,
    userType,
    userTypeLabel,
    upgradeLabel,
  } = props;

  return (
    <Card>
      <CardHeader title={title} />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography color="textPrimary" variant="subtitle2">
                {emailLabel}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="body2">
                {email}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography component="span" color="textPrimary" variant="subtitle2">
                {name1}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography component="span" color="textSecondary" variant="body2">
                {value1}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography component="span" color="textPrimary" variant="subtitle2">
                {name2}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography component="span" color="textSecondary" variant="body2">
                {value2}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography component="span" color="textPrimary" variant="subtitle2">
                {userTypeLabel}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography component="span" color="textSecondary" variant="body2">
                {userType}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {upgradeLabel && (
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <CheckoutButton buttonTextLabel={upgradeLabel} />
        </Box>
      )}
    </Card>
  );
};

export default UserCardDetailsList;
