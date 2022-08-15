import styled from "styled-components";
import { Flex } from "../../components/Box";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";

export const CustomButton = styled(Button)`
  background: #fcfcfd;
  width: 100px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #23262f;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  @media screen and (max-width: 400px) {
    width: 85px;
  }
`;

export const MobilContainer = styled(Flex)`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const ConataineMenuMobile = styled(Flex)`
  position: absolute;
  background: #fff;
  top: 100px;
  width: 100%;
  flex-direction: column;
  right: 0;
  align-items: center;
  box-shadow: rgb(0 0 0 / 70%) 0px 3px 8px;
  @media screen and (max-width: 1024px) {
    gap: 10px;
    top: 0px;
    padding: 50px 0px;
  }
`;

export const TextCart = styled(Text)`
  position: absolute;
  top: -4px;
  right: -8px;
  background: #ff592c;
  color: #ffffff;
  width: 15px;
  height: 16px;
  border-radius: 50%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const ContainerCart = styled(Flex)`
  cursor: pointer;
`;

export const ButtonOpen = styled(Button)`
  background: transparent;
  box-shadow: none;
`;
