import React from "react";
import { SvgIcon } from "@mui/material";

function asSvgIcon(reactSvgComponent) {
  const Icon = function (props) {
    const viewBox = React.useMemo(
      () => reactSvgComponent({}).props.attr.viewBox,
      []
    );
    return (
      <SvgIcon component={reactSvgComponent} viewBox={viewBox} {...props} />
    );
  };

  Object.defineProperty(Icon, "displayName", {
    value: `AsSvgIcon(${
      reactSvgComponent.displayName || reactSvgComponent.name
    })`,
  });

  return Icon;
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        width='24px'
        height='24px'
        viewBox='0 0 13721 12380'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <g>
          <circle
            cx='6907.61'
            cy='10525.6'
            r='833.333'
            style={{ fill: "#ffc278" }}
          />
          <circle
            cx='8956.74'
            cy='4256.79'
            r='4166.67'
            style={{ fill: "#56f8d3", fillOpacity: "0.86" }}
          />
          <circle
            cx='7870.16'
            cy='8144.3'
            r='4166.67'
            style={{ fill: "#ffb1e6", fillOpacity: "0.7" }}
          />
          <circle
            cx='4792.45'
            cy='5744.83'
            r='4166.67'
            style={{ fill: "#5664d2", fillOpacity: "0.8" }}
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default HomeIcon;
