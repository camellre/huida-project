import style from "./ServicePageIndex.module.scss";
import visaImage from "../../assets/visa_page_image_1.webp";
import notaryImage from "../../assets/notary_page_1.webp";
import Button from "../../genericComponents/Button/Button";
import contactUsImage from "../../assets/otherservice_image_1.webp";

export const ServicePageIndex = () => {
  return (
    <div className={style.pageWrapper}>
      <section className={style.visaSection}>
        <h2 className={style.visaTitle}>签证代办</h2>

        <p className={style.visaText}>
          我们拥有专业的团队，能为您处理复杂的签证申请手续，节省您的时间和精力。无论您是需要商务签证、旅游签证、学生签证还是工作签证，我们都可以提供精准的服务，确保您的申请过程顺利。我们的目标是为您提供快捷、高效、可靠的签证申请服务，使您的出行计划更加轻松。
        </p>
        {/*<Button text={"联系我们"} theme={style.visaButton} />*/}
        <img src={visaImage} alt={" "} className={style.visaImage} />
      </section>
      <section className={style.notarySection}>
        <h2 className={style.notaryTitle}>加州公证</h2>
        <p className={style.notaryText}>
          我们的公证人员均经过严格认证，并具有丰富的行业经验。无论您是个人还是企业，我们都能提供优质、快速、专业的服务。我们致力于为您节省时间，确保公证过程顺利、有效。让您的文书公证更简单、更安全，是我们的使命和承诺。
        </p>
        {/*<Button text={"联系我们"} theme={style.notaryButton} />*/}
        <img src={notaryImage} alt={" "} className={style.notaryImage} />
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
