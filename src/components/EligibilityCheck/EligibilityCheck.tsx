import Button from "../../genericComponents/Button/Button";
import style from "./EligibilityCheck.module.scss";
import image_1 from "../../assets/test_1.webp";
import image_2 from "../../assets/test_2.webp";
import image_3 from "../../assets/test_3.webp";
import image_4 from "../../assets/test_4.webp";
import image_5 from "../../assets/test_5.webp";

export const EligibilityCheck = () => {
  return (
    <article className={style.backgroundWrapper}>
      <div className={style.background}>
        <picture className={style.imageAll}>
          <img src={image_1} alt="" />
        </picture>
        <picture className={style.imageAll}>
          <img src={image_2} alt="" />
        </picture>
        <picture className={style.imageAll}>
          <img src={image_3} alt="" />
        </picture>
        <picture className={style.imageAll}>
          <img src={image_4} alt="" />
        </picture>
        <picture className={style.imageAll}>
          <img src={image_5} alt="" />
        </picture>
      </div>
      <div className={style.contentPositioner}>
        <div className={style.contentWrapper}>
          <h2 className={style.background_1}>
            最适合您的移民
            <br />
            方案竟然是...?
          </h2>
          <Button theme={style.background_2} text="马上点击测试" />
          <p className={style.background_3}>5分钟帮您匹配最合适的移民方案</p>
        </div>
      </div>
    </article>
  );
};
