import DynamicIsland from "./DynamicIsland";
import StatusBar from "./StatusBar";

const LayoutView = () => {
  return (
    <section className="absolute z-50 w-full h-full pointer-events-none">
      <StatusBar />
      <DynamicIsland />
    </section>
  );
};

export default LayoutView;
