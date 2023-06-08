import Button from "../../genericComponents/Button/Button";
import style from "./LandingPage.module.scss";
import passport_1 from "../../assets/passport_1.webp";
import passport_2 from "../../assets/passport_2.webp";
import passport_3 from "../../assets/passport_3.webp";
import React, { useContext } from "react";
import BodyHeightContext from "../../stateManagement/bodyHeightContext";

// interface LandingPageSwitch {
//   [key: string]: () => void;
// }

export const LandingPage = () => {
  const { bodyHeight } = useContext(BodyHeightContext);
  // const [currentIndex, setCurrentIndex] = useState<number>(0);
  //
  // const landingPageSwitch: LandingPageSwitch = {
  //   landingPage_1: () => {
  //     setCurrentIndex(0);
  //   },
  //   landingPage_2: () => {
  //     setCurrentIndex(1);
  //   },
  //   landingPage_3: () => {
  //     setCurrentIndex(2);
  //   },
  // };
  //
  // const handlePageSwitch = (e: React.MouseEvent<HTMLElement>) => {
  //   const pageSwitchFunction = landingPageSwitch[e.currentTarget.id];
  //   return pageSwitchFunction();
  // };

  return (
    <article
      className={style.landingPageWrapper}
      // style={{ "--current-index": currentIndex } as React.CSSProperties}
    >
      <div
        className={style.content_1_Background}
        style={
          { "--initialBody-height": `${bodyHeight}px` } as React.CSSProperties
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
          <Button
            to="/citizenship"
            theme={style.content_1_Button}
            text="了解更多"
          />
          <picture className={style.content_1_PassportImage}>
            <img src={passport_1} alt="" className={style.contentImage} />
          </picture>
        </div>
      </div>

      <div
        className={style.content_2_Wrapper}
        style={
          { "--initialBody-height": `${bodyHeight}px` } as React.CSSProperties
        }
      >
        <div className={style.content_2_Shadow} />
        <h2 className={style.content_2_text_1}>为您的子女创造</h2>
        <h2 className={style.content_2_text_2}>无限的教育机会！</h2>
        <h2 className={style.content_2_text_3}>
          为家庭未来保驾护航，拥有第二公民身份
        </h2>
        <Button
          to="/citizenship"
          theme={style.content_2_Button}
          text="立刻咨询"
        />
        <picture className={style.content_2_PassportImage}>
          <img src={passport_2} alt="" className={style.contentImage} />
        </picture>
      </div>

      <div
        className={style.content_3_Wrapper}
        style={
          { "--initialBody-height": `${bodyHeight}px` } as React.CSSProperties
        }
      >
        <div className={style.content_3_Shadow} />
        <h2 className={style.content_3_text_1}>拓展国际视野</h2>
        <h2 className={style.content_3_text_2}>提高安全保障</h2>
        <h2 className={style.content_3_text_3}>拥有第二身份</h2>
        <h2 className={style.content_3_text_4}>让您享有更多国际优势</h2>
        <Button
          to="/citizenship"
          text="立即申请"
          theme={style.content_3_Button}
        />
        <picture className={style.content_3_PassportImage}>
          <img src={passport_3} alt="" className={style.contentImage} />
        </picture>
      </div>

      {/*<ul className={style.landingPageToggleWrapper}>*/}
      {/*  <li*/}
      {/*    id="landingPage_1"*/}
      {/*    className={style.landingPageToggler}*/}
      {/*    onClick={handlePageSwitch}*/}
      {/*  >*/}
      {/*    1*/}
      {/*  </li>*/}
      {/*  <li*/}
      {/*    id="landingPage_2"*/}
      {/*    className={style.landingPageToggler}*/}
      {/*    onClick={handlePageSwitch}*/}
      {/*  >*/}
      {/*    2*/}
      {/*  </li>*/}
      {/*  <li*/}
      {/*    id="landingPage_3"*/}
      {/*    className={style.landingPageToggler}*/}
      {/*    onClick={handlePageSwitch}*/}
      {/*  >*/}
      {/*    3*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </article>
  );
};
