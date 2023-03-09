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
    const _hours = new Date().getHours();
    const _minutes = new Date().getMinutes();

    const hours = _hours <= 9 ? `0${_hours}` : _hours;
    const minutes = _minutes <= 9 ? `0${_minutes}` : _minutes;

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
