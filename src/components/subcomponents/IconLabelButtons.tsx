import React from 'react';
import { Button, Box, SvgIcon } from '@mui/material';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IconType } from 'react-icons';

// Convert react-icons to MUI SvgIcon
const asSvgIcon = (Icon: IconType) => {
  const SvgIconComponent = (props: React.ComponentProps<typeof SvgIcon>) => {
    const viewBox = React.useMemo(() => Icon({}).props.attr.viewBox, []);
    return <SvgIcon component={Icon} viewBox={viewBox} {...props} />;
  };

  SvgIconComponent.displayName = `AsSvgIcon(${(Icon as any).displayName ?? Icon.name ?? 'UnknownIcon'})`;
  return SvgIconComponent;
};


// Button configuration
const buttons = [
  { icon: FaFacebookSquare, label: 'Facebook', color: 'primary' },
  { icon: FaGoogle, label: 'Google', color: 'secondary' },
  { icon: FcGoogle, label: 'Google', color: 'primary' },
] as const;

const IconLabelButtons: React.FC = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {buttons.map(({ icon, label, color }) => {
        const Icon = asSvgIcon(icon);
        return (
          <Button
            key={`${label}-${color}`}
            variant="outlined"
            color={color}
            startIcon={<Icon />}
          >
            {label}
          </Button>
        );
      })}
    </Box>
  );
};

export default IconLabelButtons;

// Example usage:
// <IconLabelButtons />