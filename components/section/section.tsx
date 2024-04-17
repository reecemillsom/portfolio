import { FC } from "react";

interface Props {
  id: string;
}

// TODO add styles for this.
export const Section: FC<Props> = ({ id }) => {
  return <section id={id} style={{ height: "300px" }}></section>;
};
