import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 500px;
  padding: var(--chakra-space-xxl);

  // TODO this can be removed, just for visualisation purposes
  > div {
    border: 1px solid black;
    height: 100%;
    width: 100%;
  }

  &:nth-child(even) {
    background: var(--chakra-colors-white);
  }

  //&:nth-child(odd) {
  //  background: var(--chakra-colors-mediumBlue);
  //}
`;
