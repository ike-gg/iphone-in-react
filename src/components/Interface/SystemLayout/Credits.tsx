const Credits = () => {
  return (
    <div className="absolute left-0 bottom-0 p-5 m-8 bg-white rounded-lg shadow-xl max-w-sm">
      <h1 className="font-semibold text-3xl text-neutral-800">
        iPhone in React
      </h1>
      <h2 className="font-medium text-base text-neutral-500">
        by{" "}
        <a
          className="text-blue-500"
          href="https://github.com/ike-gg"
          target="_blank"
        >
          @ike-gg
        </a>
      </h2>
      <p className="mt-2 text-sm text-neutral-400">
        Library responsible for animations:{" "}
        <a
          className="text-blue-500"
          href="https://github.com/framer/motion"
          target="_blank"
        >
          Framer Motion
        </a>
      </p>
      <p className="p-3 mt-2 rounded-lg bg-yellow-50 text-yellow-600">
        ⚠️ Best experiences on desktop with at least 1080p display,{" "}
        <b>I did not even tried to make it responsible on mobile.</b>
      </p>
    </div>
  );
};

export default Credits;
