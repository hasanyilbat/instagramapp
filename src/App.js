import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";

function App() {
  const user = useSelector((state) => state.auth.user);
  const showRoutes = useRoutes(routes);

  if (user === null) {
    return <Loader />;
  }

  return (
    <div>
      <Toaster position="top-right" />
      {showRoutes}
    </div>
  );
}

export default App;
