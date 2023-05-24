import style from "./HomeGrid.module.scss";
import { OurServiceSection } from "../OurServiceSection/OurServiceSection";
import { CustomerSupportSection } from "../CustomerSupportSection/CustomerSupportSection";
import { PartnerSection } from "../PartnerSection/PartnerSection";
import { FeedbackSection } from "../FeedbackSection/FeedbackSection";
import { LandingPage } from "../LandingPage/LandingPage";
import { ReasonForSecondCitizen } from "../ReasonForSecondCitizen/ReasonForSecondCitizen";
import { CountrySlider } from "../CountrySlider/CountrySlider";
import { CallOut } from "../CallOut/CallOut";
import { EligibilityCheck } from "../EligibilityCheck/EligibilityCheck";
import { CountriesSlider } from "../CountriesSlider/CountriesSlider";

export const HomeGrid = () => {
  return (
    <div className={style.homeGrid}>
      <section className={style.gridItemWrapper}>
        <LandingPage />
      </section>
      <section className={style.gridItemWrapper}>
        <ReasonForSecondCitizen />
      </section>
      <section className={style.gridItemWrapper}>
        <CountriesSlider />
      </section>
      <section className={style.gridItemWrapper}>
        <CallOut />
      </section>
      <section className={style.gridItemWrapper}>
        <EligibilityCheck />
      </section>
    </div>
  );
};
