import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StatusBar = () => {
  const [time, setTime] = useState("");
  const color = useSelector(
    (state: RootState) => state.interface.statusBarColor
  );

  const updateTime = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    setInterval(() => {
      setTime(updateTime);
    }, 1000);
  }, []);

  return (
    <motion.div
      animate={{ color: color === "dark" ? "#000000" : "#ffffff" }}
      className="absolute w-full z-50 flex justify-between text-lg font-medium py-3 px-12"
    >
      <p>{time}</p>
      <div>😁💀😭🧍‍♂️</div>
    </motion.div>
  );
};

export default StatusBar;
