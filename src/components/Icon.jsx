import React from "react";
import SVG from "react-inlinesvg";

const Icon = ({ name, size = 16, ...props }) => {
  return (
    <div>
      <SVG
        src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
        width={size}
        height={size}
        {...props}
      />
    </div>
  );
};

export default Icon;
