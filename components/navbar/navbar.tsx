import React, { FC } from "react";
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
  return (
    <NavBar>
      <NavContainer>
        {/* TODO I may change this to a logo or something in the future, make this clickable to navigate back to main page*/}
        <NavName>Reece Millsom</NavName>
        <NavOptionsContainer>
          {MENU_OPTIONS.map((option) => (
            <NavOption key={option.href} href={option.href}>
              {option.text}
            </NavOption>
          ))}
        </NavOptionsContainer>
      </NavContainer>
    </NavBar>
  );
};
