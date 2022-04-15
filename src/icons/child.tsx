import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function Child(props) {
  return (
    <SvgIcon {...props}>
      <path
        xmlns='http://www.w3.org/2000/svg'
        d='M24,11.5a3.494,3.494,0,0,0-2.149-3.225A9.974,9.974,0,0,0,12,0V0A9.974,9.974,0,0,0,2.149,8.274,3.5,3.5,0,0,0,3.268,14.99a10.3,10.3,0,0,0,1.471,2.3A3,3,0,0,0,3,20v4H21V20a3,3,0,0,0-1.738-2.711,10.327,10.327,0,0,0,1.47-2.3A3.505,3.505,0,0,0,24,11.5Zm-3.752,1.473-.835-.148-.282.8C18.215,16.221,15.13,19,12,19v0c-3.13,0-6.214-2.78-7.131-5.376l-.28-.793-.83.14A1.567,1.567,0,0,1,3.5,13a1.5,1.5,0,0,1-.27-2.97l.738-.134.078-.744A7.969,7.969,0,0,1,8.584,2.765a3.5,3.5,0,1,0,6.833,0,7.966,7.966,0,0,1,4.537,6.384l.078.744.738.133A1.5,1.5,0,0,1,20.5,13,1.606,1.606,0,0,1,20.248,12.973Z'
      />
    </SvgIcon>
  );
}