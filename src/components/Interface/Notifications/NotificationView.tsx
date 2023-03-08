import { RootState } from "@/app/store";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Notification from "./Notification";

const NotificationView = () => {
  const isActive = useSelector(
    (state: RootState) => state.notification.isActive
  );

  return (
    <motion.section className="absolute z-40 w-full h-full pointer-events-none">
      <AnimatePresence>{isActive && <Notification />}</AnimatePresence>
    </motion.section>
  );
};

export default NotificationView;
