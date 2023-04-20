import Button from "../../genericComponents/Button/Button";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import style from "./LandingPage.module.scss";
import passport_1 from "../../assets/passport_1.webp";

export const LandingPage = () => {
  return (
    <article>
      <ul>
        <li className={style.content_1_Background}>
          <div className={style.content_1_Wrapper}>
            <h2 className={style.content_1_text_1}>说走就走</h2>
            <h2 className={style.content_1_text_2}>随心自由出行</h2>
            <h2 className={style.content_1_text_3}>
              为 保 护 您 和 您 的 家 人 出 行 自 由 做 保 障
            </h2>
            <h2 className={style.content_1_text_4}>
              无 风 险 申 请 第 二 护 照 保 驾 护 航
            </h2>
            <Button theme={style.content_1_Button} text="了解更多" />
            <ImageWrapper
              imageSrc={passport_1}
              imageAlt=""
              wrapperStyle={style.content_1_PassportImage}
            />
          </div>
        </li>
        <li></li>
        <li></li>
      </ul>
    </article>
  );
};
