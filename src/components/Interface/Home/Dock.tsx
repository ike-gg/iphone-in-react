import randomHexColor from "@/utils/randomHexColor";
import HomeAppShortcut from "./HomeAppShortcut";

const Dock = () => {
  const colors = [
    { color: "#a6a6a6", id: "dom", icon: "safari" },
    { color: "#abc526", id: "js", icon: "apple-music" },
    { color: "#37a97b", id: "ts", icon: "ios-message" },
    { color: "#0018bb", id: "swift", icon: "mail" },
  ];
  return (
    <div className="mt-auto grid grid-cols-4 gap-7 gap-y-5 p-4 m-4 rounded-[30px] bg-white/20 backdrop-blur-md">
      {colors.map((app) => (
        <HomeAppShortcut key={app.id} appId={app.id} icon={app.icon} />
      ))}
    </div>
  );
};

export default Dock;
