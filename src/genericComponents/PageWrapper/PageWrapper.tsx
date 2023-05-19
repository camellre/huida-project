import style from "./PageWrapper.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { ReactNode } from "react";

interface PageWrapperProps {
  page: ReactNode;
}

export const PageWrapper = ({ page }: PageWrapperProps) => {
  return (
    <>
      <main className={style.mainBodyWrapper}>{page}</main>
      <Footer />
    </>
  );
};
