import style from "./HomePage.module.scss";
import { HomeGrid } from "../../components/HomeGrid/HomeGrid";
import Footer from "../../components/Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <HomeGrid />
      <Footer />
    </>
  );
};
