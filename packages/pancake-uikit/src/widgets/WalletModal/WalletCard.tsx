import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import MoreHorizontal from "../../components/Svg/Icons/MoreHorizontal";
import { ButtonProps } from "../../components/Button";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config, ConnectorNames } from "./types";
import { TransferLink } from "./styles";
import { ChevronDownIcon } from "../../components/Svg";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

const WalletButton = styled(Button).attrs({ width: "100%", variant: "text" })`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  border: 1px solid #e7e7e1;
  border-radius: 12px;
  padding: 10px 17px;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    background: #E45F35;
    opacity: 1;
    color: #fff;

    div {
      color: #fff;
    }
  }
`;

const WalletButtonShowMore = styled(WalletButton)`
  border: none;
  padding: 0px 17px;
   
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    background: transparent;
    opacity: 1;
  }
`;

declare var window: any

interface MoreWalletCardProps extends ButtonProps {
  t: (key: string) => string;
}

export const MoreWalletCard: React.FC<MoreWalletCardProps> = ({ t, ...props }) => {
  return (
    <WalletButtonShowMore variant="tertiary" {...props}>
      <TransferLink>{t("More")}</TransferLink>
      <ChevronDownIcon color="#FF592C" width="24px" />
    </WalletButtonShowMore>
  );
};

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig;
  const { isDesktop } = useMatchBreakpoints()
  return (
    <WalletButton
      variant="tertiary"
      onClick={() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // Since iOS does not support Trust Wallet we fall back to WalletConnect
        if (walletConfig.title === "Trust Wallet" && isIOS) {
          login(ConnectorNames.WalletConnect);
        } else {
          login(walletConfig.connectorId);
        }
        // rice connect by deep link for mobile
        if (!window.ethereum && walletConfig.href && title === "Rice Wallet") {
          window.open(walletConfig.href, "_blank", "noopener noreferrer");
        }
        localStorage.setItem(walletLocalStorageKey, walletConfig.title);
        localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
        
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="40px" mb="8px" />
      <Text fontSize="14px">{title}</Text>
    </WalletButton>
  );
};

export default WalletCard;
