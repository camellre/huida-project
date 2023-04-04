import Button from "../../genericComponents/Button/Button";
import IconStatic from "../../genericComponents/IconStatic/IconStatic";
import style from "./Card.module.scss";
import icon_1 from "../../assets/search.svg";

function Card() {
  return (
    <div className={style.cardContainer}>
      <h1 className={style.cardTitleContainer}>
        <span className={style.cardTitle}>格林纳达</span>
        <span className={style.cardTitle}>热门第二身份国家</span>
      </h1>
      <h2 className={style.cardSubtitleContainer}>
        <span className={style.cardSubtitle}>
          130万人民币投资入籍 半年获批 E2签证福利
        </span>
      </h2>
      <div className={style.cardBodyContainer}>
        <Button theme="navBarButton" text="更多详情" />
        <div className={style.cardBodyContentContainer}>
          <span className={style.cardBodyIconContainer}>
            <IconStatic IconImage={icon_1} />
            <div>
              <div>快速获批</div>
              <div>无全球征税</div>
            </div>
          </span>
          <span className={style.cardBodyIconContainer}>
            <IconStatic IconImage={icon_1} />
            <div>
              <div>快速获批</div>
              <div>无全球征税</div>
            </div>
          </span>
          <span className={style.cardBodyIconContainer}>
            <IconStatic IconImage={icon_1} />
            <div>
              <div>快速获批</div>
              <div>无全球征税</div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
