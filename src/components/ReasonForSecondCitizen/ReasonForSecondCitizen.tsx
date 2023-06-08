import style from "./ReasonForSecondCitizen.module.scss";
import worldMapVideo from "../../assets/pexels-vlada-karpovich-7429830-1280x720-25fps.mp4";
import { useContext } from "react";
import BodyHeightContext from "../../stateManagement/bodyHeightContext";

export const ReasonForSecondCitizen = () => {
  const { bodyHeight } = useContext(BodyHeightContext);
  return (
    <article
      className={style.cardWrapper}
      style={
        { "--initialBody-height": `${bodyHeight}px` } as React.CSSProperties
      }
    >
      <h2 className={style.cardTitle}>为什么需要第二身份</h2>
      <video className={style.cardVideoWrapper} controls loop muted>
        <source src={worldMapVideo} />
      </video>
      <p className={style.cardText}>
        在当今瞬息万变的世界中，高净值人士应考虑另一种公民身份的原因有很多，包括但不限于安全、旅行便利、税收和财务规划以及内部政治局势。
        我们正在协助我们的客户通过投资获得第二公民身份，而不会影响他们的生活方式。
        在这些投资移民的项目中，无需放弃您的原国籍。
        没有语言及居住要求，您可以在端时间内合法获得第二公民身份并获得新护照。
      </p>
    </article>
  );
};
