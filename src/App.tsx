import style from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import BodyHeightContext from "./stateManagement/bodyHeightContext";

function App() {
  let routeLocation = useLocation();
  const bodyRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  const handleResize = () => {
    if (bodyRef.current !== null) setBodyHeight(bodyRef.current.offsetHeight);
  };

  useEffect(() => {
    if (bodyRef.current !== null) setBodyHeight(bodyRef.current.offsetHeight);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routeLocation]);
  return (
    <div className={style.bodyWrapper} ref={bodyRef}>
      <BodyHeightContext.Provider value={{ bodyHeight }}>
        <header>
          <NavigationBar />
        </header>
        <Outlet />
      </BodyHeightContext.Provider>
    </div>
  );
}

export default App;
