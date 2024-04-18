import React, { FC } from "react";
import { useScrollToSection } from "./useScrollToSection";
import {
  NavBar,
  NavContainer,
  NavItem,
  NavName,
  NavOption,
  NavOptionsContainer,
} from "./styles";
import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MENU_OPTIONS } from "./constants";

// TODO still need to do mobile view, burger icon with https://v2.chakra-ui.com/docs/components/menu/usage#adding-icons-and-commands
export const Navbar: FC = () => {
  const { setSelectedHref, selectedHref } = useScrollToSection();

  const handleNavClick = (href: string) => {
    setSelectedHref(href);
  };

  // TODO animate the menu item for mobile, to take up whole screen with the list options centered.
  return (
    <NavBar>
      <NavContainer>
        {/* TODO I may change this to a logo or something in the future, make this clickable to navigate back to main page*/}
        <NavName>Reece Millsom</NavName>
        <NavOptionsContainer>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<HamburgerIcon />}
            />
            <MenuList>
              {MENU_OPTIONS.map((menuOption, index) => (
                <NavOption key={menuOption.href} href={menuOption.href}>
                  <NavItem
                    onClick={() => handleNavClick(menuOption.href)}
                    className={selectedHref === menuOption.href ? "active" : ""}
                  >
                    {menuOption.text}
                  </NavItem>
                </NavOption>
              ))}
            </MenuList>
          </Menu>
        </NavOptionsContainer>
      </NavContainer>
    </NavBar>
  );
};
