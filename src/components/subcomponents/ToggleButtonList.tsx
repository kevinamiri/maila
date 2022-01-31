import React, { RefCallback, RefObject } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

interface ToggleButtonListProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title?: string;
  icon?: JSX.Element;
  disabled?: boolean;
  ariaLabel?: string;
}

type OrNull<T> = T | null;
type Ref<T> = RefCallback<T> | RefObject<T> | null;

const ToggleButtonList = React.forwardRef(
  (
    { onClick, icon, title, ariaLabel, ...rest }: ToggleButtonListProps,
    ref: Ref<OrNull<HTMLButtonElement>>
  ) => {
    return (
      <Tooltip title={title} arrow>
        <IconButton
          sx={{
            margin: "1px",
            textTransform: "none",
            lineHeight: "1.65",
            borderRadius: "3px",
            marginTop: "1.5px",
            marginBottom: "-6px",
          }}
          onClick={onClick}
          color='primary'
          ref={ref}
          aria-label={ariaLabel}
          size='small'
          component='span'
          {...rest}
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  }
);

export default ToggleButtonList;
