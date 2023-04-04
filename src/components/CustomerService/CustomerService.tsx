import Card from "../../genericComponents/Card/Card";
import IconStatic from "../../genericComponents/IconStatic/IconStatic";
import style from "./CustomerService.module.scss";
import icon_1 from "../../assets/settings.svg";
import Button from "../../genericComponents/Button/Button";

function CustomerService() {
  return (
    <Card
      childrenTop={
        <h1 className={style.cardTitleContainer}>诚信服务 一呼万应</h1>
      }
      childrenBottom={
        <div className={style.cardBodyContainer}>
          <p>
            我们的在线AI客服小苹果，是您的贴身小顾问，任何时候都可以与小苹果对话，咨询任何于我们的项目详情与预约真人客服对接。无惧风雨，无视距离，一呼万应！
          </p>
          <div className={style.cardSubBodyContainer}>
            <span className={style.iconContainer}>
              <IconStatic IconImage={icon_1} />
              <p className={style.iconText}>多种语言实时对话</p>
            </span>
            <span className={style.iconContainer}>
              <IconStatic IconImage={icon_1} />
              <p className={style.iconText}>24小时在线咨询</p>
            </span>
            <span className={style.iconContainer}>
              <IconStatic IconImage={icon_1} />
              <p className={style.iconText}>支持语音文字功能</p>
            </span>
          </div>
          <div className={style.cardSubBodySecondContainer}>
            <IconStatic IconImage={icon_1} />
            <Button theme="navBarButton" text="呼叫小苹果" />
          </div>
          <div className={style.cardSubBodySecondContainer}>
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
            <IconStatic IconImage={icon_1} />
          </div>
          <div className={style.cardSubBodySecondContainer}>
            <p>​欢迎关注公众平台了解汇达移民咨询中心的动态</p>
          </div>
        </div>
      }
    />
  );
}

export default CustomerService;
