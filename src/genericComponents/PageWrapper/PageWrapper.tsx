import style from "./PageWrapper.module.scss";
import Footer from "../../components/Footer/Footer";
import { ReactNode } from "react";

interface PageWrapperProps {
  page: ReactNode;
}

export const PageWrapper = ({ page }: PageWrapperProps) => {
  return (
    <>
      <main>{page}</main>
      <Footer />
    </>
  );
};
