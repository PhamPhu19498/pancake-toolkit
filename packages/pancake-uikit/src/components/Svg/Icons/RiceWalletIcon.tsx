import React from "react";
import styled from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const IconLogoRice: React.FC<SvgProps> = () => {
  return (
    <Img src="/images/logo_rice_wallet.png" alt="logo rice"/>
  );
};

export default IconLogoRice;

const Img = styled.img`
    height:40px;
    width: 40px;
`