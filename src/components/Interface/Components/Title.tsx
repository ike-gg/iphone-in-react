import { FC } from "react";

interface Props {
  children: string;
}

const Title: FC<Props> = ({ children }) => {
  return <h1 className="text-4xl font-semibold pt-6 pb-2">{children}</h1>;
};

export default Title;
