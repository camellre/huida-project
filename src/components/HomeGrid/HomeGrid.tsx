import style from "./HomeGrid.module.scss";
import image_1 from "../../assets/family_1.svg";
import image_2 from "../../assets/home_3.png";
import { GrenadaSection } from "../GrenadaSection/GrenadaSection";
import { MaltaSection } from "../MaltaSection/MaltaSection";
import { OurServiceSection } from "../OurServiceSection/OurServiceSection";
import { CustomerSupportSection } from "../CustomerSupportSection/CustomerSupportSection";
import { PartnerSection } from "../PartnerSection/PartnerSection";
import { FeedbackSection } from "../FeedbackSection/FeedbackSection";

export const HomeGrid = () => {
  return (
    <main className={style.homeGrid}>
      <section className={style.gridItemWrapper}>
        <GrenadaSection />
      </section>
      <section className={style.gridItemWrapper}>
        <img src={image_1} alt="" />
      </section>
      <section className={style.gridItemWrapper}>
        <img src={image_1} alt="" />
      </section>
      <section className={style.gridItemWrapper}>
        <MaltaSection />
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
