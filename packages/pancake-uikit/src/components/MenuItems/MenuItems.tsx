import React from "react";
import styled from "styled-components";
import { Flex } from "../Box";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import { MenuItemsProps } from "./types";
import { ChevronDownIcon } from "../Svg";

const MenuItemsContainer = styled(Flex)`
  
  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;

const MenuItems: React.FC<MenuItemsProps> = ({ items = [], activeItem, activeSubItem, ...props }) => {
  return (
    <MenuItemsContainer {...props}>
      {items.map(({ label, items: menuItems = [], href, icon = "ChevronDown" }) => {
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;
        const hasMenuItems=menuItems.length>1
        const linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href };
        return (
          <DropdownMenu key={`${label}#${href}#${icon}`} items={menuItems} py={1} activeItem={activeSubItem}>
            <MenuItem {...linkProps} isActive={isActive} statusColor={statusColor}>
              {label || <IconComponent iconName={icon} color={isActive ? "#FF592C" : "#000"} />}
              { hasMenuItems &&
                <ChevronDownIcon/>
              }
            </MenuItem>
          </DropdownMenu>
        );
      })}
    </MenuItemsContainer>
  );
};

export default MenuItems;
