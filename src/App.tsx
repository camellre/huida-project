import style from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LandingPage } from "./components/LandingPage/LandingPage";

function App() {
  let routeLocation = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routeLocation]);
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <LandingPage />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
