import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  display: flex;
  padding: 12px 24px;
  /* position: relative; */
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
  justify-content: center;
  color: #23262f;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  gap: 10px;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 70vh;
  /* overflow-y: auto; */
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const WrapIconButton = styled(IconButton)`
  position: absolute;
  top: 15px;
  right: 15px;
  background: black;
  border-radius: 50%;
  height: 40px;
  width: 40px;

  svg {
    fill: #fff;
    width: 25px;
  }
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <WrapIconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
      <CloseIcon color="text" />
    </WrapIconButton>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="text" />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 20px;
  width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }

  padding: 60px 80px 50px 80px;

  @media screen and (max-width: 768px) {
    padding: 50px 40px 50px 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 12px 20px 20px 20px;
  }
  @media screen and (max-width: 320px) {
    padding: 10px 10px 25px 10px;
  }
`;
