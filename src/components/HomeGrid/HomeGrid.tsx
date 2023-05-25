import style from "./HomeGrid.module.scss";
import { LandingPage } from "../LandingPage/LandingPage";
import { ReasonForSecondCitizen } from "../ReasonForSecondCitizen/ReasonForSecondCitizen";
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
