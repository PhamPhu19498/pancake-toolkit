import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon, PiBridgeLogo } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  isDark: boolean;
  href: string;
  linkImages?:string
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 50px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 95px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
    @media screen {
     width: 50px;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;
const Img = styled.img`
  width: 95px;
  height: auto;
  @media only screen and (max-width: 600px) {
    width: 70px;
    height: auto;
  }
`

const Logo: React.FC<Props> = ({ isDark, href, linkImages }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
    {/* {linkImages} */}
      <Img src="https://banner2.cleanpng.com/20180519/rya/kisspng-logo-phoenix-art-5afffc96998f80.692522331526725782629.jpg" alt="logo-pibridge"/>
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Home">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Home">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
