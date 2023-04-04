import Button from "../../genericComponents/Button/Button";
import Card from "../../genericComponents/Card/Card";
import IconStatic from "../../genericComponents/IconStatic/IconStatic";
import style from "./Partnership.module.scss";
import icon_1 from "../../assets/search.svg";

function Partnership() {
  return (
    <Card
      childrenTop={<h1 className={style.cardTitleContainer}>我们的合作伙伴</h1>}
      childrenBottom={
        <div className={style.cardBodyWrapper}>
          <div className={style.cardSubBodyWrapper_1}>
            <p className={style.cardSubBodyText}>
              合作是汇达移民咨询中心工作的核心。我们为全球客户创造国际机遇，积极构建与客户之间的相互融合及信任。我们希望与合作伙伴一同来实现这个愿景。我们的合作可以汇聚创造力、深化影响力以达成共赢。诚邀您成为汇达移民服务咨询中心的合作伙伴，让我们的服务，为您的企业赢得先机。
              如果您有兴趣与我们合作，请随时与我们联系。
            </p>
            <Button theme="navBarButton" text="发送留言" />
          </div>
          <div className={style.cardSubBodyWrapper_2}>
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
          </div>
        </div>
      }
    />
  );
}

export default Partnership;
