import React from "react";
import { Flex } from "../Box";
import {
  StyledFooter,
  CustomFlex,
  CustomLink,
  Text,
  HeadTitle,
  ContainerDownload,
  ContainerMoreInformation,
  ContainerContact,
  ContainerInfo,
  CsTextEmail,
} from "./styles";
import { MoreInformation } from "./config";
import SocialLinks from "./Components/SocialLinks";
import { FooterProps } from "./types";
import { LogoFooter } from "../Svg";

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
    <StyledFooter borderTop='1px solid #777E91' p={["40px 6px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <CustomFlex>
          <Flex>
            <LogoFooter />
          </Flex>
          <ContainerInfo>
            <ContainerMoreInformation>
              {MoreInformation.map((items) => {
                return (
                  <CustomLink href={items.href} target="_blank">
                    {items.label}
                  </CustomLink>
                );
              })}
            </ContainerMoreInformation>
          </ContainerInfo>

          <ContainerContact flexDirection="column">
            <HeadTitle>Contact</HeadTitle>
            <CsTextEmail>hello@runtogether.net</CsTextEmail>
          </ContainerContact>

          <ContainerContact flexDirection="column">
            <HeadTitle>Follow us</HeadTitle>
            <SocialLinks order={[2]} />
          </ContainerContact>
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
