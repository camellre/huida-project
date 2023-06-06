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
        <picture>
          <img src={image_2} alt="" className={style.backgroundMobile} />
        </picture>
        <picture>
          <img src={image_1} alt="" />
        </picture>
        <picture>
          <img src={image_3} alt="" />
        </picture>
        <picture>
          <img src={image_4} alt="" />
        </picture>
        <picture>
          <img src={image_5} alt="" className={style.backgroundMobile} />
        </picture>
      </div>
      <h2 className={style.background_1}>
        最适合您的移民
        <br />
        方案竟然是...?
      </h2>
      <Button to="/" theme={style.background_2} text="马上点击测试" />
      <p className={style.background_3}>5分钟帮您匹配最合适的移民方案</p>
    </article>
  );
};
