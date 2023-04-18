import style from "./CitizenshipPage.module.scss";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export const CitizenshipPage = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
