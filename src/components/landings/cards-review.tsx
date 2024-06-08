import React, { Fragment } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Client {
  id: number;
  name: string;
  imageUrl: string;
  lastInvoice: {
    date: string;
    dateTime: string;
    amount: string;
    status: 'Paid' | 'Withdraw' | 'Overdue';
  };
}

const statuses: Record<string, { color: 'success' | 'default' | 'error' }> = {
  Paid: { color: 'success' },
  Withdraw: { color: 'default' },
  Overdue: { color: 'error' },
};

const clients: Client[] = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
];

const Example: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={3}>
      {clients.map((client) => (
        <Grid key={client.id} item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={client.name} src={client.imageUrl} sx={{ width: 48, height: 48, mr: 2 }} />
                  <Typography variant="subtitle1">{client.name}</Typography>
                </div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  size="small"
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      width: '20ch',
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemText primary="View" secondary={client.name} />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemText primary="Edit" secondary={client.name} />
                  </MenuItem>
                </Menu>
              </div>
              <Divider sx={{ my: 2 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <Typography variant="body2" color="textSecondary">
                  Last invoice
                </Typography>
                <Typography variant="body2">
                  <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                </Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" color="textSecondary">
                  Amount
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="subtitle2" sx={{ mr: 1 }}>
                    {client.lastInvoice.amount}
                  </Typography>
                  <Chip
                    label={client.lastInvoice.status}
                    color={statuses[client.lastInvoice.status].color}
                    size="small"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Example;