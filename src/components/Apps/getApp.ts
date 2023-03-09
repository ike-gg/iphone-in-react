import { FC, ReactNode } from "react";
import Calculator from "./Calculator/Calculator";
import Components from "./Components/Components";
import Weather from "./Weather/Weather";

interface App {
  appId: string;
  name: string;
  icon: string;
  element: () => JSX.Element;
  statusBarColor: "light" | "dark";
}

const appsBase: App[] = [
  {
    name: "Calculator",
    icon: "calculator",
    appId: "calculator",
    element: Calculator,
    statusBarColor: "light",
  },
  {
    appId: "weather",
    element: Weather,
    icon: "weather",
    name: "Weather",
    statusBarColor: "light",
  },
  {
    appId: "components",
    element: Components,
    icon: "news",
    name: "Components",
    statusBarColor: "dark",
  },
  {
    appId: "test",
    icon: "apple-tv",
    name: "Apple TV",
    element: Components,
    statusBarColor: "dark",
  },
];

const getApp = (queryAppId: string) => {
  const foundApp = appsBase.find((app) => app.appId === queryAppId);

  return foundApp;
};

const getAllApps = () => {
  return appsBase;
};

export { getApp, getAllApps };
