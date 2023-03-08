import { notificationActions } from "@/app/notification";
import { RootState } from "@/app/store";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Notification = () => {
  const dispatch = useDispatch();
  const { icon, message, title } = useSelector(
    (state: RootState) => state.notification
  );

  const animateExit = useAnimation();

  useEffect(() => {
    animateExit.start({ y: 0 });
  });

  const handleDrag = (offsetY: number) => {
    if (offsetY < -40) {
      animateExit.start({ y: -150 }).then(() => {
        dispatch(notificationActions.discard());
      });
    } else {
      animateExit.start({ y: 0 });
    }
  };

  return (
    <motion.div
      initial={{ y: -150 }}
      animate={animateExit}
      drag={"y"}
      transition={{ ease: "easeInOut", stiffness: 500 }}
      onDragEnd={(e, info) => handleDrag(info.offset.y)}
      dragSnapToOrigin
      dragConstraints={{ bottom: 10 }}
      className="flex gap-3 bg-neutral-200/50 backdrop-blur-xl mt-[3.4rem] mx-3 p-3 box-border rounded-2xl pointer-events-auto shadow-lg shadow-black/10"
    >
      <Image
        className="w-12 object-contain"
        src={`/images/icons/${icon}.png`}
        width={150}
        height={150}
        alt="notification icon"
        draggable={false}
      />
      <section className="flex flex-col justify-center gap-[0.15rem]">
        <h2 className="font-medium text-sm leading-none">{title}</h2>
        <p className="text-sm leading-none font-normal text-black/60">
          {message}
        </p>
      </section>
    </motion.div>
  );
};

export default Notification;
