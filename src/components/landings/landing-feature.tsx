
import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Chip, Divider, ButtonGroup, Button } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';

interface Person {
  name: string;
  title: string;
  role: string;
  email: string;
  telephone: string;
  imageUrl: string;
}

const people: Person[] = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];

const Example: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {people.map((person) => (
        <Grid key={person.email} item xs={12} sm={6} lg={4}>
          <Card>
            <CardContent>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={10}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle1">{person.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Chip label={person.role} size="small" color="success" />
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="textSecondary">
                    {person.title}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Avatar alt={person.name} src={person.imageUrl} />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <ButtonGroup variant="text" fullWidth>
              <Button component="a" href={`mailto:${person.email}`} startIcon={<EmailIcon />}>
                Email
              </Button>
              <Button component="a" href={`tel:${person.telephone}`} startIcon={<PhoneIcon />}>
                Call
              </Button>
            </ButtonGroup>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Example;