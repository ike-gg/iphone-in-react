import { FC, MouseEvent } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface Props {
  children: JSX.Element | string | JSX.Element[];
  onClick?: (e: MouseEvent) => void;
}

const Card: FC<Props> = ({ children, onClick }) => {
  const isArray = Array.isArray(children);

  if (isArray) {
    const elements = children.map((item, index) => {
      return (
        <motion.div
          key={`${index}${item.type}`}
          className={classNames(
            "bg-white px-3 py-2 border-b border-neutral-200/70 last:border-b-0 transition-colors ease-in-out",
            { "active:bg-neutral-200": onClick }
          )}
        >
          {item}
        </motion.div>
      );
    });
    return (
      <div className="bg-white my-2 rounded-lg overflow-hidden">{elements}</div>
    );
  }

  return (
    <motion.div
      onClick={onClick}
      className={classNames(
        "bg-white px-3 py-2 my-2 rounded-lg overflow-hidden transition-colors ease-in-out",
        { "active:bg-neutral-200": onClick ? true : false }
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
