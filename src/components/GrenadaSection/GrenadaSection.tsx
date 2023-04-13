import style from "./GrenadaSection.module.scss";
import Button from "../../genericComponents/Button/Button";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import icon_1 from "../../assets/pinpaper-plus-svgrepo-com.svg";

export const GrenadaSection = () => {
  return (
    <article>
      <h1>
        格林纳达
        <br />
        热门第二身份国家
      </h1>
      <div>
        <p>130万元人民币投资入籍 半年获批 E2签证福利</p>
        <Button text="更多详情" />
        <ul className={style.grenadaAdWrapper}>
          <li className={style.grenadaAdItem}>
            <ImageWrapper imageSrc={icon_1} imageStyle={style.grenadaAdIcon} />
            <p>
              快速获批
              <br />
              无全球征税
            </p>
          </li>
          <li className={style.grenadaAdItem}>
            <ImageWrapper imageSrc={icon_1} imageStyle={style.grenadaAdIcon} />
            <p>
              无需登陆面
              <br />
              签149国家
            </p>
          </li>
          <li className={style.grenadaAdItem}>
            <ImageWrapper imageSrc={icon_1} imageStyle={style.grenadaAdIcon} />
            <p>
              E2签证
              <br />
              跳板美国
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};
