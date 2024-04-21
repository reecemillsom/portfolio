import { FC } from "react";
import * as S from "./styles";

interface Props {
  id: string;
}

// TODO add styles for this.
export const Section: FC<Props> = ({ id }) => {
  return (
    <S.Section id={id}>
      <div>content</div>
    </S.Section>
  );
};
