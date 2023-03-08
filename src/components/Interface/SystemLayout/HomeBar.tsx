import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { interfaceActions } from "@/app/interface";
import { FC } from "react";

interface Props {
  handleHomeBar: (offsetX: number, offsetY: number) => void;
  handleDragEnd: (finalOffset: number) => void;
}

const HomeBar: FC<Props> = ({ handleHomeBar, handleDragEnd }) => {
  const color = useSelector(
    (state: RootState) => state.interface.statusBarColor
  );

  return (
    <motion.div
      onPan={(e, info) => {
        handleHomeBar(info.offset.x, info.offset.y);
      }}
      onPanEnd={(e, info) => {
        handleDragEnd(info.offset.y);
      }}
      className="z-50 absolute left-0 w-full h-4 flex items-center justify-center bottom-0 pointer-events-auto"
    >
      <motion.div
        animate={{ backgroundColor: color === "dark" ? "#000000" : "#ffffff" }}
        className="w-5/12 h-1.5 rounded-full"
      />
    </motion.div>
  );
};

export default HomeBar;
