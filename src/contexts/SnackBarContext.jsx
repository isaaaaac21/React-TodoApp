import { createContext, useState } from "react";
import SnackBar from "../components/pop-ups/SnackBar";

export const SnackBarContext = createContext({});

export const SnackBarProvider = ({ children }) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  function showHideSnackBar(message) {
    setOpenSnackBar(true);
    setToastMessage(message);
    setTimeout(() => {
      setOpenSnackBar(false);
    }, 2000);
  }
  return (
    <SnackBarContext.Provider value={{ showHideSnackBar }}>
      <SnackBar open={openSnackBar} message={toastMessage}></SnackBar>
      {children}
    </SnackBarContext.Provider>
  );
};
