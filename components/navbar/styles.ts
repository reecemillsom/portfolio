import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

export const NavBar = styled.nav`
  width: 100%;
  height: 60px;

  background-color: var(--navy);
`;

export const NavContainer = styled.div`
  height: 100%;
  margin: 0 var(--space-xl);

  display: flex;
  justify-content: space-between;
`;

export const NavOptionsContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const dynamicNavOptionStyle = ({ className }: { className: string }) => css`
  border-bottom: ${className === "active"
    ? `2px solid var(--light-blue)`
    : "none"};
`;

// TODO the style in and out animation isn't working as expected.
export const NavOption = styled(Link)`
  color: var(--white);
  text-decoration: none;
  ${dynamicNavOptionStyle};

  &:hover {
    &:not(.active) {
      border-bottom: 2px solid var(--white);
    }
  }

  &:not(:last-child) {
    margin-right: var(--space-md);
  }
`;

export const NavName = styled.ul`
  display: flex;
  align-items: center;
  color: var(--white);
  padding-left: 0;
`;
