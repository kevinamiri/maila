import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Face as FaceIcon,
  InsertEmoticon as InsertEmoticonIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  Favorite as FavoriteIcon,
  ThumbUp as ThumbUpIcon,
  Clear as ClearIcon,
  AttachFile as AttachFileIcon,
} from '@mui/icons-material';

interface Activity {
  id: number;
  type: string;
  person: { name: string; imageUrl?: string };
  date: string;
  dateTime: string;
  comment?: string;
}

const activityData: Activity[] = [
    {
      id: 1,
      type: 'commented',
      person: {
        name: 'John Doe',
        imageUrl: 'https://example.com/john-doe.jpg',
      },
      date: 'Jan 1',
      dateTime: '2023-01-01T10:00:00',
      comment: 'Great post!',
    },
    {
      id: 2,
      type: 'liked',
      person: {
        name: 'Jane Smith',
        imageUrl: 'https://example.com/jane-smith.jpg',
      },
      date: 'Jan 2',
      dateTime: '2023-01-02T14:30:00',
    },
    // Add more activity objects as needed
  ];

const moods = [
  { name: 'Excited', icon: <InsertEmoticonIcon />, color: 'error' },
  { name: 'Loved', icon: <FavoriteIcon />, color: 'secondary' },
  { name: 'Happy', icon: <FaceIcon />, color: 'success' },
  { name: 'Sad', icon: <SentimentDissatisfiedIcon />, color: 'warning' },
  { name: 'Thumbsy', icon: <ThumbUpIcon />, color: 'primary' },
  { name: 'I feel nothing', icon: <ClearIcon />, color: 'default' },
];

export default function Example() {
  const [selectedMood, setSelectedMood] = useState(moods[5]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List sx={{ width: '100%' }}>
        {activityData.map((item) => (
          <ListItem key={item.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.person.name} src={item.person.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={item.person.name + ' ' + item.type}
              secondary={
                <>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    {item.comment}
                  </Typography>
                  {' — ' + item.date}
                </>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
        <TextField
          fullWidth
          multiline
          placeholder="Add your comment..."
          variant="outlined"
          sx={{ ml: 1, mr: 1 }}
        />
        <IconButton onClick={handleClick}>
          {selectedMood.icon}
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {moods.map((mood, index) => (
            <MenuItem
              key={index}
              selected={mood === selectedMood}
              onClick={() => {
                setSelectedMood(mood);
                handleClose();
              }}
              sx={{ color: mood.color }}
            >
              {mood.icon}
              {mood.name}
            </MenuItem>
          ))}
        </Menu>
        <Button variant="contained">Comment</Button>
      </Box>
    </>
  );
}
