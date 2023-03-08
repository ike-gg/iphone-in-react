import RootLayout from "@/components/Layout/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
