import style from "./CustomerSupportSection.module.scss";
import icon_1 from "../../assets/pinpaper-plus-svgrepo-com.svg";
import Button from "../../genericComponents/Button/Button";

export const CustomerSupportSection = () => {
  return (
    <article className={style.customerSupportWrapper}>
      <h2>诚信服务 一呼万应</h2>
      <p>
        我们的在线AI客服小苹果，是您的贴身小顾问，任何时候都可以与小苹果对话，咨询任何于我们的项目详情与预约真人客服对接。无惧风雨，无视距离，一呼万应！
      </p>
      <ul className={style.supportAdWrapper}>
        <li className={style.supportAdItemWrapper}>
          <img className={style.adIcon} src={icon_1} alt="" />
          <p>
            多种语言
            <br />
            实时对话
          </p>
        </li>
        <li className={style.supportAdItemWrapper}>
          <img className={style.adIcon} src={icon_1} alt="" />
          <p>
            24小时
            <br />
            在线咨询
          </p>
        </li>
        <li className={style.supportAdItemWrapper}>
          <img className={style.adIcon} src={icon_1} alt="" />
          <p>
            支持语音
            <br />
            文字功能
          </p>
        </li>
      </ul>
      <ul className={style.supportAdWrapper}>
        <li>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li>
          <Button text="呼叫小苹果" />
        </li>
      </ul>
      <ul className={style.supportAdWrapper}>
        <li>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
      </ul>
      <p>欢迎关注公众平台了解汇达移民咨询中心的动态</p>
    </article>
  );
};
