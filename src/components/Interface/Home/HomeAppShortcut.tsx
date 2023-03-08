import { FC, MouseEvent } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";
import { interfaceActions } from "@/app/interface";

interface Props {
  icon?: string;
  name?: string;
  appId: string;
}

const HomeAppShortcut: FC<Props> = ({ appId, icon, name }) => {
  const dispatch = useDispatch();

  const imgAnimation = useAnimation();

  const handleMouseMove = (e: MouseEvent) => {
    const { movementX, movementY } = e;
    imgAnimation.start({
      x: movementX / 6,
      y: movementY / 6,
    });
  };

  const handleMouseLeave = () => {
    imgAnimation.start({ x: 0, y: 0 });
  };

  return (
    <motion.div className="w-full aspect-square flex flex-col justify-center items-center gap-1">
      <motion.div
        animate={imgAnimation}
        onClick={() => {
          dispatch(interfaceActions.changeCurrentApp(appId));
        }}
        layoutId={appId}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full aspect-square"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, filter: "brightness(70%)" }}
        style={{
          borderRadius: 15,
          backgroundImage: icon
            ? `url('/images/icons/${icon}.png')`
            : "url('/images/icons/empty.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          filter: "brightness(100%)",
        }}
      />
      {name && (
        <p className="text-white/95 whitespace-nowrap text-ellipsis overflow-hidden text-xs font-normal">
          {name}
        </p>
      )}
    </motion.div>
  );
};

export default HomeAppShortcut;
