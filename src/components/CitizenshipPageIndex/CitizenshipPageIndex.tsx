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
          <h1>投资入籍</h1>
          <p>
            探索我们的投资入籍（CBI）计划的好处。通过对一个国家的经济发展做出重大投资，您可以迅速获得公民身份。这使您能享受更大的全球流动性和潜在的税收优惠，同时为该国的增长做出贡献。参与CBI计划
            - 对充满希望的未来的战略投资。
          </p>
        </article>
      </section>
      <section className={style.passportImageSection}>
        <picture>
          <img src={grenadaPassport} alt="" />
        </picture>
      </section>
      <section className={style.countrySection}>
        <h2 className={style.programTitle}>投资入籍国家</h2>
        <img src={countryIcon_1} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>安提瓜与巴布达</h3>
        <p className={style.countryText}>
          安提瓜和巴布达提供了加勒比地区最具竞争力的公民计划之一。100,000美元起。
        </p>
        <Button
          to="/citizenship/antigua"
          text={"Learn More"}
          theme={style.countryButton}
        />
        <img src={countryIcon_2} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>多米尼加</h3>
        <p className={style.countryText}>
          多米尼加提供了一个有吸引力的公民计划，该计划包括房地产选项。投资100,000美元起。
        </p>
        <Button
          to="/citizenship/dominica"
          text={"Learn More"}
          theme={style.countryButton}
        />
        <img src={countryIcon_3} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>格林纳达</h3>
        <p className={style.countryText}>
          格林纳达是唯一一家与美国持有E-2投资者签证条约的加勒比公民计划，使公民有资格申请非移民签证。
        </p>
        <Button
          to="/citizenship/grenada"
          text={"Learn More"}
          theme={style.countryButton}
        />
        <img src={countryIcon_4} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>马耳他</h3>
        <p className={style.countryText}>
          通过直接投资的特殊服务获得归化公民身份。此过程提供世界上最严格的尽职调查和审查标准。
        </p>
        <Button
          to="/citizenship/malta"
          text={"Learn More"}
          theme={style.countryButton}
        />
        <img src={countryIcon_5} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>葡萄牙</h3>
        <p className={style.countryText}>
          作为欧盟成员之一，葡萄牙提供的福利为在整个欧盟投资提供了机会。500,000美元起。
        </p>
        <Button
          to="/citizenship/portugal"
          text={"Learn More"}
          theme={style.countryButton}
        />
        <img src={countryIcon_6} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>圣基茨</h3>
        <p className={style.countryText}>
          圣基茨和尼维斯拥有加勒比公民计划中最强大的护照之一。125,000美元起。
        </p>
        <Button
          to="/citizenship/stkittis"
          text={"Learn More"}
          theme={style.countryButton}
        />
        <img src={countryIcon_7} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>土耳其</h3>
        <p className={style.countryText}>
          土耳其投资入籍计划提供了一个与亚洲和欧洲都有联系的国家的公民身份，并能进入两个地区的市场。
        </p>
        <Button
          to="/citizenship/turkey"
          text={"Learn More"}
          theme={style.countryButton}
        />
        <img src={countryIcon_8} alt={" "} className={style.countryIcon} />
        <h3 className={style.countryTitle}>美国</h3>
        <p className={style.countryText}>
          作为世界上最强大的国家，美利坚合众国为所有类型的投资者提供最全面的福利。800,000美元起。
        </p>
        <Button
          to="/citizenship/usa"
          text={"Learn More"}
          theme={style.countryButton}
        />
      </section>
      <section className={style.contactUsSection}>
        <h3 className={style.contactUsTitle}>联系我们</h3>
        <p className={style.contactUsText}>
          汇达移民信息咨询中心协助国际客户在各自的程序下获得签证和公民身份。联系我们安排初次私人咨询。
        </p>
        <Button to="/contact" text={"立即咨询"} theme={style.contactUsButton} />
        <img src={contactUsImage} alt={" "} className={style.contactUsImage} />
      </section>
    </div>
  );
};
