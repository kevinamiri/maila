import * as React from 'react';
import { Chip, IconButton, SvgIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BadgeExample: React.FC = () => {
  const badges = [
    { color: 'default', label: 'Badge' },
    { color: 'error', label: 'Badge' },
    { color: 'warning', label: 'Badge' },
    { color: 'success', label: 'Badge' },
    { color: 'primary', label: 'Badge' },
    { color: 'secondary', label: 'Badge' },
    { color: 'info', label: 'Badge' },
    { color: 'error', label: 'Badge' },
  ];

  return (
    <>
      {badges.map((badge, index) => (
        <Chip
          key={index}
          label={badge.label}
          color={badge.color as any}
          onDelete={() => console.log('Delete clicked')}
          deleteIcon={<CloseIcon />}
          variant="outlined"
          sx={{ m: 0.5 }}
        />
      ))}
    </>
  );
};

export default BadgeExample;
