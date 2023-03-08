import { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  bgColor?: string;
}

const AppLayout: FC<Props> = ({ children, bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor ? bgColor : "#F5F5F5" }}
      className="scrollbar absolute h-full w-full top-0 left-o z-40 pt-[3.25rem] pb-6 px-4 overflow-auto"
    >
      {children}
    </div>
  );
};

export default AppLayout;
