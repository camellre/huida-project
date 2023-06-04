import style from "./CitizenshipPageIndex.module.scss";
import grenadaPassport from "../../assets/Grenada-Passport.webp";
import countryIcon_1 from "../../assets/antigua_Icon.webp";
import countryIcon_2 from "../../assets/dominica_icon.webp";
import countryIcon_3 from "../../assets/grenada_icon.webp";
import countryIcon_4 from "../../assets/malta_icon.webp";
import countryIcon_5 from "../../assets/portugal_icon.webp";
import countryIcon_6 from "../../assets/stkittis_icon.webp";
import countryIcon_7 from "../../assets/turkey_icon.webp";
import countryIcon_8 from "../../assets/usa_Icon.webp";
import contactUsImage from "../../assets/otherservice_image_1.webp";
import Button from "../../genericComponents/Button/Button";

export const CitizenshipPageIndex = () => {
  return (
    <div className={style.pageWrapper}>
      <section className={style.introSection}>
        <article>
          <h1>Citizenship by Investment</h1>
          <p>
            Explore the benefits of our Citizenship by Investment (CBI) program.
            By making a significant investment in a country's economic
            development, you can swiftly obtain citizenship. This allows for
            greater global mobility and potential tax advantages, while
            simultaneously contributing to the country's growth. Engage with the
            CBI program - a strategic investment for a promising future.
          </p>
        </article>
      </section>
      <section className={style.passportImageSection}>
        <picture>
          <img src={grenadaPassport} alt="" />
        </picture>
      </section>
      <section className={style.countrySection}>
        <h2 className={style.programTitle}>
          Citizenship by Investment Programs
        </h2>
        <img src={countryIcon_1} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>Antigua and Barbuda</h3>
        <p className={style.countryText}>
          Antigua and Barbuda offers one of the most competitive citizenship
          programs in the Caribbean. Options start from USD 100,000.
        </p>
        <Button text={"Learn More"} theme={style.countryButton} />
        <img src={countryIcon_2} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>Dominica</h3>
        <p className={style.countryText}>
          Dominica offers an attractive citizenship program with a real estate
          option. Required contributions start from USD 100,000.
        </p>
        <Button text={"Learn More"} theme={style.countryButton} />
        <img src={countryIcon_3} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>Grenada</h3>
        <p className={style.countryText}>
          Grenada has the only Caribbean citizenship program that holds an E-2
          Investor Visa Treaty with the USA, allowing citizens to be eligible to
          apply for a non-immigrant visa.
        </p>
        <Button text={"Learn More"} theme={style.countryButton} />
        <img src={countryIcon_4} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>Malta</h3>
        <p className={style.countryText}>
          Citizenship by Naturalisation for Exceptional Services by Direct
          Investment. This process offers the world’s strictest due diligence
          standards and vetting.
        </p>
        <Button text={"Learn More"} theme={style.countryButton} />
        <img src={countryIcon_5} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>Portugal</h3>
        <p className={style.countryText}>
          As one of the EU members, Portugal offers benefits that provide the
          opportunities to invest in the entire EU. Options start from USD
          500,000.
        </p>
        <Button text={"Learn More"} theme={style.countryButton} />
        <img src={countryIcon_6} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>St. Kitts and Nevis</h3>
        <p className={style.countryText}>
          St. Kitts and Nevis has one of the strongest passports among all the
          Caribbean citizenship programs. A donation of USD 125,000 is required.
        </p>
        <Button text={"Learn More"} theme={style.countryButton} />
        <img src={countryIcon_7} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>Türkiye</h3>
        <p className={style.countryText}>
          The Türkiye Citizenship by Investment Program provides citizenship of
          a country with links to both Asia and Europe and access to the markets
          in both regions.
        </p>
        <Button text={"Learn More"} theme={style.countryButton} />
        <img src={countryIcon_8} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>United States</h3>
        <p className={style.countryText}>
          The United States of America, as the most powerful country in the
          world, offers the most comprehensive benefits for every kind of
          investors. Options start from USD 800,000.
        </p>
        <Button text={"Learn More"} theme={style.countryButton} />
      </section>
      <section className={style.contactUsSection}>
        <h3 className={style.contactUsTitle}>Contact Us Today</h3>
        <p className={style.contactUsText}>
          Skyward assists international clients in obtaining visa and
          citizenship under the respective programs. Contact us to arrange an
          initial private consultation.
        </p>
        <Button text={"Contact Us"} theme={style.contactUsButton} />
        <img src={contactUsImage} alt={" "} className={style.contactUsImage} />
      </section>
    </div>
  );
};
