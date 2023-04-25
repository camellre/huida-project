import Button from "../../genericComponents/Button/Button";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import style from "./LandingPage.module.scss";
import passport_1 from "../../assets/passport_1.webp";
import passport_2 from "../../assets/passport_2.webp";
import passport_3 from "../../assets/passport_3.webp";
import { useState } from "react";

interface LandingPageSwitch {
  [key: string]: () => void;
}

export const LandingPage = () => {
  const [landingPageShow, setlandingPageShow] = useState([true, false, false]);

  const landingPageSwitch: LandingPageSwitch = {
    landingPage_1: () => {
      setlandingPageShow([true, false, false]);
    },
    landingPage_2: () => {
      setlandingPageShow([false, true, false]);
    },
    landingPage_3: () => {
      setlandingPageShow([false, false, true]);
    },
  };

  const handlePageSwitch = (e: React.MouseEvent<HTMLElement>) => {
    const pageSwtichFunction = landingPageSwitch[e.currentTarget.id];
    return pageSwtichFunction();
  };

  return (
    <article className={style.landingPageWrapper}>
      <div
        className={
          !landingPageShow[0]
            ? style.content_1_Background
            : [
                style.content_1_Background,
                style.content_1_Background_Show,
              ].join(" ")
        }
      >
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
      </div>
      <div
        className={
          !landingPageShow[1]
            ? style.content_2_Background
            : [
                style.content_2_Background,
                style.content_2_Background_Show,
              ].join(" ")
        }
      >
        <div className={style.content_2_BlackBackground}></div>
        <div className={style.content_2_Wrapper}>
          <Button theme={style.content_2_Button} text="立刻咨询" />
          <h2 className={style.content_2_text_1}>
            为家庭未来保驾护航，拥有第二公民身份
          </h2>
          <h2 className={style.content_2_text_2}>
            为您的子女创造
            <br />
            无限的教育机会！
          </h2>
          <ImageWrapper
            imageSrc={passport_2}
            wrapperStyle={style.content_2_PassportImage}
          />
        </div>
      </div>
      <div
        className={
          !landingPageShow[2]
            ? style.content_3_Background
            : [
                style.content_3_Background,
                style.content_3_Background_Show,
              ].join(" ")
        }
      >
        <div className={style.content_3_WhiteBackground}></div>
        <div className={style.content_3_Wrapper}>
          <h2 className={style.content_3_text_1}>拓展国际视野</h2>
          <h2 className={style.content_3_text_2}>提高安全保障</h2>
          <h2 className={style.content_3_text_3}>拥有第二身份</h2>
          <h2 className={style.content_3_text_4}>让您享有更多国际优势</h2>
          <Button text="立即申请" theme={style.content_3_Button} />
          <ImageWrapper
            imageSrc={passport_3}
            wrapperStyle={style.content_3_PassportImage}
          />
        </div>
      </div>
      <ul className={style.landingPageTogglerWrapper}>
        <li
          id="landingPage_1"
          className={style.landingPageToggler}
          onClick={handlePageSwitch}
        >
          1
        </li>
        <li
          id="landingPage_2"
          className={style.landingPageToggler}
          onClick={handlePageSwitch}
        >
          2
        </li>
        <li
          id="landingPage_3"
          className={style.landingPageToggler}
          onClick={handlePageSwitch}
        >
          3
        </li>
      </ul>
    </article>
  );
};
