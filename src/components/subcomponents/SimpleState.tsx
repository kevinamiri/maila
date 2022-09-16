import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface StatesProps {
  label?: string;
  number?: string;
  label2?: string;
  number2?: string;
}

const SimpleState: React.FC<StatesProps> = ({
  label = "Totall number of characters handled",
  number = "0",
  label2 = "Total number of tokens used",
  number2 = "0",
}: StatesProps) => (
  <Box>
    <Card>
      <CardHeader title={"Usage"} />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography color='textPrimary' variant='subtitle2'>
                {label}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color='textSecondary' variant='body2'>
                {`${number}`}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography color='textPrimary' variant='subtitle2'>
                {label2}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color='textSecondary' variant='body2'>
                {`${number2}`}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  </Box>
);

export default SimpleState;
