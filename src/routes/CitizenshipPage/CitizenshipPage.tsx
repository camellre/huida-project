import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import style from "./CitizenshipPage.module.scss";

export const CitizenshipPage = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
