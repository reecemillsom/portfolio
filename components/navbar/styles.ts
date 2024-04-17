import styled from "@emotion/styled";
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

// TODO the style in and out animation isn't working as expected.
export const NavOption = styled(Link)`
  color: var(--white);
  text-decoration: none;

  display: inline-block;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 2px;
    background-color: var(--white);
    transition: width 0.25s ease-out;
  }

  &:hover::before {
    width: 100%;
    left: 0;
    right: auto;
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
