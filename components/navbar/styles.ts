import styled from "@emotion/styled";
import { Link } from "@chakra-ui/next-js";
import { MenuItem } from "@chakra-ui/react";

export const NavBar = styled.nav`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;

  background-color: var(--chakra-colors-navy);
  box-shadow: 0 2px 8px -2px var(--chakra-colors-navy);
`;

export const NavContainer = styled.div`
  height: 100%;
  margin: 0 var(--chakra-space-md);

  display: flex;
  justify-content: space-between;
`;

export const NavOptionsContainer = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(MenuItem)`
  &.active {
    content: "";
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    border-right: 4px solid var(--chakra-colors-navy);
    border-radius: 4px 0 0 4px;
  }
`;

export const NavOption = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const NavName = styled.ul`
  display: flex;
  align-items: center;
  color: var(--chakra-colors-white);
  padding-left: 0;
`;
