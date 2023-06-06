import style from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  let routeLocation = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routeLocation]);
  return (
    <div className={style.viewport}>
      <header className={style.header}>
        <NavigationBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
