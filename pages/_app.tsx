import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";

// NProgress
Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
