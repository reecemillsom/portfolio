import React, { FC, useState } from "react";
import { useScrollToSection } from "./useScrollToSection";
import {
  NavBar,
  NavContainer,
  NavOption,
  NavName,
  NavOptionsContainer,
} from "./styles";
import { MENU_OPTIONS } from "./constants";

// TODO still need to do mobile view, burger icon with https://v2.chakra-ui.com/docs/components/menu/usage#adding-icons-and-commands
export const Navbar: FC = () => {
  const { setSelectedHref, selectedHref } = useScrollToSection();

  const handleNavClick = (href: string) => {
    setSelectedHref(href);
  };

  return (
    <NavBar>
      <NavContainer>
        {/* TODO I may change this to a logo or something in the future, make this clickable to navigate back to main page*/}
        <NavName>Reece Millsom</NavName>
        <NavOptionsContainer>
          {MENU_OPTIONS.map((option, index) => (
            <NavOption
              tabIndex={index + 1}
              onClick={() => handleNavClick(option.href)}
              className={selectedHref === option.href ? "active" : ""}
              key={option.href}
              href={option.href}
            >
              {option.text}
            </NavOption>
          ))}
        </NavOptionsContainer>
      </NavContainer>
    </NavBar>
  );
};
