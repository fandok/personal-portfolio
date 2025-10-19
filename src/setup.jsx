import App from "./App";
import "./index.css";
import smoothscroll from "smoothscroll-polyfill";

export const createApp = () => {
  smoothscroll.polyfill();

  return <App />;
};
