import { FC } from "react";

interface Props {
  children: string;
}

const Tooltip: FC<Props> = ({ children }) => {
  return <p className="px-3 text-sm text-neutral-400/70">{children}</p>;
};

export default Tooltip;
