import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="22" cy="22" r="22" fill="#DFF0FF" />
      <rect
        x="19.8192"
        y="14.0906"
        width="10.1808"
        height="11.3603"
        stroke="#66B6FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2336 25.8854V30.8205H13.0527V19.4602H15.1634"
        stroke="#66B6FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
