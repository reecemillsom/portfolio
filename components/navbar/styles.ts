import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "@chakra-ui/next-js";

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
  margin: 0 var(--chakra-space-xl);

  display: flex;
  justify-content: space-between;
`;

export const NavOptionsContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const dynamicNavOptionStyle = ({ className }: { className: string }) => css`
  border-bottom: ${className === "active"
    ? `2px solid var(--chakra-colors-lightBlue)`
    : "none"};
`;

export const NavOption = styled(Link)`
  color: var(--chakra-colors-white);
  ${dynamicNavOptionStyle};

  &:hover {
    text-decoration: none;
    &:not(.active) {
      border-bottom: 2px solid var(--chakra-colors-white);
    }
  }

  &:not(:last-child) {
    margin-right: var(--chakra-space-md);
  }
`;

export const NavName = styled.ul`
  display: flex;
  align-items: center;
  color: var(--chakra-colors-white);
  padding-left: 0;
`;
