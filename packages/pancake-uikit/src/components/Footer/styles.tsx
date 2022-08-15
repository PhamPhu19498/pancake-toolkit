import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)`
  background: ${({ theme }) => theme.colors.background};
  @media only screen and (max-width: 600px) {
    margin-bottom: 0px !important;
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${darkColors.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const ContainerInfo = styled(Flex) `
`

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  padding: 24px 0;
  margin-bottom: 24px !important;
  flex-direction: row-reverse;
  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  border-bottom: 1px solid ${darkColors.cardBorder};
`;

export const StyledText = styled.span`
  color: ${darkColors.text};
`;
export const CustomFlex = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 25%);
  @media screen and (max-width: 768px) {
    padding: 56px 40px 50px 40px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 56px 40px 50px 30px;
    align-items: flex-start;
    gap: 60px;
  }
`;

export const CustomLink = styled.a`
  color: ${({ theme }) => theme.colors.textSubtle};
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;


export const ContainerMoreInformation = styled(Flex)`
  width: 338px;
  gap: 10px;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`;

export const ContainerFooter = styled(Flex)`
  width: 338px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
export const Col = styled(Flex)`
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 8px;
  }
  > button {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
`;
export const Row = styled(Flex)`
  width: 50%;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SwapHeadFooter = styled(Flex)`
  flex-direction: column;
`;

export const ContainerContact = styled(Flex)`
  gap: 30px;
`;

export const Text = styled.div``;

export const HeadTitle = styled.div`
  color: #000;
  font-weight: bold;
`;

export const WrapBtnDowload = styled(Flex)``;

export const BtnGGPlay = styled.div``;

export const BtnAppStore = styled.div``;

export const ContainerDownload = styled(Flex)`
  gap: 15px;
`;

// export const ContainerFooter = styled(Flex)`
//   @media screen and (max-width: 500px) {
    
//   }
// `