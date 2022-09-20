import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Grid from "../../components/Box/Grid";
import Box from "../../components/Box/Box";
import getThemeValue from "../../util/getThemeValue";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";
import { Button } from "../../components/Button";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import WalletCard, { MoreWalletCard } from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  displayCount?: number;
  t: (key: string) => string;
}

const WalletWrapper = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

const CsModalContainer = styled(ModalContainer)`
  /* background: url('https://static.vecteezy.com/system/resources/previews/003/619/016/original/abstract-purple-violet-frame-or-border-watercolor-texture-in-white-background-free-vector.jpg'); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 100%;
  background-color: #FFF8E7;
  padding: 20px 10px;
  border: none;
    border-radius: 12px;
`

const CsModalHeader = styled(ModalHeader)`
  background: transparent;
  position: relative;
  border-bottom: none;
`

const CsModalTitle = styled(ModalTitle)`
  justify-content: center;
`


const CsGrid = styled(Grid)`
  /* display: flex; */
`
 
/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, displayCount = 3, t }) => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const sortedConfig = getPreferredConfig(config);
  const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);

  return (
    <CsModalContainer background='#FFF8E7' minWidth="320px">
      {/* <ModalHeader background={getThemeValue("colors.gradients.bubblegum")(theme)}> */}
      <CsModalHeader>
        <CsModalTitle>
          <Heading color="#494949">{t("Connect Wallet")}</Heading>
        </CsModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </CsModalHeader>
      <ModalBody width="100%">
        <WalletWrapper py="24px" maxHeight="453px" overflowY="auto">
          <CsGrid gridTemplateColumns="1fr 1fr">
            {displayListConfig.map((wallet) => (
              <Box key={wallet.title}>
                <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
              </Box>
            ))}
            {!showMore && <MoreWalletCard t={t} onClick={() => setShowMore(true)} />}
          </CsGrid>
        </WalletWrapper>
        {/* <Box p="24px">
          <Text textAlign="center" color="textSubtle" as="p" mb="16px">
            {t("Haven’t got a crypto wallet yet?")}
          </Text>
          <Button
            as="a"
            href="https://docs.pancakeswap.finance/get-started/connection-guide"
            variant="subtle"
            width="100%"
            {...getExternalLinkProps()}
          >
            {t("Learn How to Connect")}
          </Button>
        </Box> */}
      </ModalBody>
    </CsModalContainer>
  );
};

export default ConnectModal;
