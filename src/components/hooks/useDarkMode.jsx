import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("toggleDarkMode");

  useEffect(() => {
    value
      ? (document.body.className = "dark-mode")
      : (document.body.className = "");
  }, [value]);
  return [value, setValue];
};

export default useDarkMode;
