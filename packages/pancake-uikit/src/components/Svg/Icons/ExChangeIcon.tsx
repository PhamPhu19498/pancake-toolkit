import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
        <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.8332 10.0013C18.8332 14.6013 15.0998 18.3346 10.4998 18.3346C5.89984 18.3346 3.0915 13.7013 3.0915 13.7013M3.0915 13.7013H6.85817M3.0915 13.7013V17.868M2.1665 10.0013C2.1665 5.4013 5.8665 1.66797 10.4998 1.66797C16.0582 1.66797 18.8332 6.3013 18.8332 6.3013M18.8332 6.3013V2.13464M18.8332 6.3013H15.1332" 
        stroke="#777E91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
