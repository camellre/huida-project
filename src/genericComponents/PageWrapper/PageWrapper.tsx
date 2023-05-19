import style from "./PageWrapper.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export const PageWrapper = () => {
  return (
    <>
      <main className={style.mainBodyWrapper}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
