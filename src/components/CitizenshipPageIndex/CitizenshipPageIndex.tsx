import style from "./CitizenshipPageIndex.module.scss";
import grenadaPassport from "../../assets/Grenada-Passport.webp";

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
    </div>
  );
};
