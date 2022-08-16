import styled, { DefaultTheme } from "styled-components";
import { Colors } from "../../theme";
import { Text } from "../Text";
import { StyledDropdownMenuItemProps } from "./types";

const getTextColor = ({
  $isActive,
  disabled,
  theme,
}: StyledDropdownMenuItemProps & { theme: DefaultTheme; $isActive: boolean }) => {
  if (disabled) return theme.colors.textDisabled;
  if ($isActive) return theme.colors.primaryBright;

  return theme.colors.textSubtle;
};

export const DropdownMenuItem = styled.button<StyledDropdownMenuItemProps & { $isActive: boolean }>`
  align-items: center;
  border: 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme, disabled, $isActive }) => getTextColor({ theme, disabled, $isActive })};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: ${({ $isActive = false }) => ($isActive ? "600" : "400")};
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 10px;
  padding-right: 10px;
  border-radius:8px;
  width: 100%;
  &:hover:not(:disabled) {
    background-color: #FF592C;
    color:#fff;
  }

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`;

export const StyledDropdownMenuItemContainer = styled.div`
  /* &:first-child > ${DropdownMenuItem} {
    border-radius:8px;
  }

  &:last-child > ${DropdownMenuItem} {
    border-radius:8px;
  } */
`;

export const DropdownMenuDivider = styled.hr`
  border-color: ${({ theme }) => theme.colors.cardBorder};
  border-style: solid;
  border-width: 1px 0 0;
  margin: 4px 0;
`;

export const StyledDropdownMenu = styled.div<{ $isOpen: boolean; $isBottomNav: boolean }>`
  background-color: ${({ theme }) => theme.card.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  pointer-events: auto;
  /* width: ${({ $isBottomNav }) => ($isBottomNav ? "calc(100% - 32px)" : "280px")}; */
  width: 200px;
  padding: 12px;
  visibility: visible;
  z-index: 1001;
  box-shadow: 0px 4px 24px rgba(133, 133, 133, 0.2);
  ${({ $isOpen }) =>
    !$isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
  `}
`;

export const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;
