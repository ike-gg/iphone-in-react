import { FC, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import classNames from "classnames";

interface Props {
  isActive?: boolean;
}

const Switch: FC<Props> = ({ isActive = false }) => {
  const [active, setActive] = useState(isActive);

  return (
    <motion.div
      onClick={() => {
        setActive((prev) => !prev);
      }}
      className={classNames(
        "h-6 w-10  rounded-full shadow-inner p-[.15rem] box-content flex overflow-hidden transition-colors ease-in-out",
        { "bg-neutral-200 justify-start": !active },
        { "bg-green-400 justify-end": active }
      )}
    >
      <motion.div
        layout
        initial={false}
        className="h-full aspect-square bg-white rounded-full"
      />
    </motion.div>
  );
};

export default Switch;
