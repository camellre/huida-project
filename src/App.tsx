import style from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  let routeLocation = useLocation();
  const viewportRef = document.getElementById("root");
  useEffect(() => {
    viewportRef?.scrollTo(0, 0);
  }, [routeLocation]);
  return (
    <div>
      <header className={style.header}>
        <NavigationBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
