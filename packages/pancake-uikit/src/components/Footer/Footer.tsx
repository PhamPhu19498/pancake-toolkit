import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
  CustomFlex,
  CustomLink,
  ContainerMoreInformation,
  ContainerFooter,
  Col,
  Row,
  Text,
  WrapSocials,
  HeadTitle,
  WrapBtnDowload,
  BtnGGPlay,
  BtnAppStore,
  ContainerMoreInformationLeft,
  ContainerMoreInformationRight,
  ContainerDownload,
} from "./styles";
import { MoreInformationLeft, MoreInformationRight } from "./config";
import SocialLinks from "./Components/SocialLinks";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon, LogoFooter, GgPlayIcon, AppStoreIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 6px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <CustomFlex>
          <WrapSocials flexDirection="column">
            <Flex>
              <LogoFooter />
            </Flex>
            <Text>Theo dõi chúng tôi tại</Text>
            <SocialLinks order={[2]} />
          </WrapSocials>

          <Flex>
            <ContainerMoreInformationLeft>
              {MoreInformationLeft.map((items) => {
                return (
                  <CustomLink href={items.href} target="_blank">
                    {items.label}
                  </CustomLink>
                );
              })}
            </ContainerMoreInformationLeft>
            <ContainerMoreInformationRight>
              {MoreInformationRight.map((items) => {
                return (
                  <CustomLink href={items.href} target="_blank">
                    {items.label}
                  </CustomLink>
                );
              })}
            </ContainerMoreInformationRight>
          </Flex>
          <ContainerDownload flexDirection="column">
            <HeadTitle>Liên Hệ</HeadTitle>
            <Text>hello@runtogether.net</Text>

            <WrapBtnDowload>
              <BtnGGPlay>
                <GgPlayIcon />
              </BtnGGPlay>
              <BtnAppStore>
                <AppStoreIcon />
              </BtnAppStore>
            </WrapBtnDowload>
          </ContainerDownload>
        </CustomFlex>

        {/* <StyledToolsContainer
          order={[1, null, 3]}
          justifyContent="space-between"
        >
          <ContainerFooter order={[2, null, 1]}>
              <Row>
                <Col>
                  <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
                </Col>
                <Col>
                  <LangSelector
                    currentLang={currentLang}
                    langs={langs}
                    setLang={setLang}
                    color="textSubtle"
                    dropdownPosition="top-right"
                  />
                </Col>
              </Row>
          </ContainerFooter>
          <Flex justifyContent="space-between" alignItems="center">
              <CakePrice cakePriceUsd={cakePriceUsd} color="textSubtle" />
          </Flex>
        </StyledToolsContainer> */}
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
