import React, { useEffect } from "react";
import { logout } from "../components/firebase";

const Logout = () => {
  useEffect(() => {
    logout();
  }, []);

  return null;
};

export default Logout;
