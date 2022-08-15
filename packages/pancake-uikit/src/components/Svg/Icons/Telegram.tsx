import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.2401 16.6069C14.4424 15.9249 17.2961 11.9654 16.6141 7.76317C15.9321 3.56089 11.9726 0.707146 7.77036 1.38915C3.56809 2.07115 0.714341 6.03064 1.39634 10.2329C2.07835 14.4352 6.03784 17.2889 10.2401 16.6069Z"
        stroke="#777E90"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.70853 9.46669C4.60853 9.42503 4.42519 9.34169 4.41686 9.21669C4.40852 9.09169 4.5252 8.95004 4.8002 8.85004L12.2252 5.9917C12.5669 5.8667 12.8752 6.08337 12.7502 6.58337L11.5085 12.55C11.4169 12.9834 11.1669 13.075 10.7919 12.8917C10.1252 12.4417 9.4502 11.9917 8.78353 11.5417C8.4252 11.8084 8.0752 12.0834 7.71686 12.35C7.45853 11.6667 7.19186 10.9834 6.93353 10.3C6.7002 10.2167 5.39186 9.75836 4.70853 9.46669Z"
        stroke="#777E90"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
