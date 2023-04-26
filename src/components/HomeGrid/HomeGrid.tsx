import style from "./HomeGrid.module.scss";
import image_2 from "../../assets/home_3.png";
import { OurServiceSection } from "../OurServiceSection/OurServiceSection";
import { CustomerSupportSection } from "../CustomerSupportSection/CustomerSupportSection";
import { PartnerSection } from "../PartnerSection/PartnerSection";
import { FeedbackSection } from "../FeedbackSection/FeedbackSection";
import { LandingPage } from "../LandingPage/LandingPage";
import { ReasonForSecondCitizen } from "../ReasonForSecondCitizen/ReasonForSecondCitizen";
import { CountrySlider } from "../CountrySlider/CountrySlider";

export const HomeGrid = () => {
  return (
    <main className={style.homeGrid}>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <LandingPage />
      </section>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <ReasonForSecondCitizen />
      </section>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <CountrySlider />
      </section>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <OurServiceSection />
      </section>
      <section className={style.gridItemWrapper}>
        <img src={image_2} alt="" />
      </section>
      <section className={style.gridItemWrapper}>
        <CustomerSupportSection />
      </section>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <PartnerSection />
      </section>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <FeedbackSection />
      </section>
    </main>
  );
};
