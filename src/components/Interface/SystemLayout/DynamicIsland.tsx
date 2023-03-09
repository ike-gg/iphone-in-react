import { interfaceActions } from "@/app/interface";
import { useDispatch } from "react-redux";

const DynamicIsland = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(interfaceActions.exitApp());
      }}
      className="z-50 absolute left-1/2 -translate-x-1/2 w-3/12 h-7 rounded-3xl top-3 bg-black pointer-events-auto"
    />
  );
};

export default DynamicIsland;
