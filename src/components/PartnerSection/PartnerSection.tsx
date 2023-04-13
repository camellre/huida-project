import style from "./PartnerSection.module.scss";
import Button from "../../genericComponents/Button/Button";
import icon_1 from "../../assets/pinpaper-plus-svgrepo-com.svg";

export const PartnerSection = () => {
  return (
    <article>
      <h2>我们的合作伙伴</h2>
      <div className={style.partnerSubTitleWrapper}>
        <p>
          合作是汇达移民咨询中心工作的核心。我们为全球客户创造国际机遇，积极构建与客户之间的相互融合及信任。我们希望与合作伙伴一同来实现这个愿景。我们的合作可以汇聚创造力、深化影响力以达成共赢。诚邀您成为汇达移民服务咨询中心的合作伙伴，让我们的服务，为您的企业赢得先机。
          如果您有兴趣与我们合作，请随时与我们联系。
        </p>
        <Button text="发送留言" theme={style.sendMessageButton} />
      </div>
      <ul className={style.partnerAdWrapper}>
        <li className={style.partnerAdItem}>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li className={style.partnerAdItem}>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li className={style.partnerAdItem}>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li className={style.partnerAdItem}>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li className={style.partnerAdItem}>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li className={style.partnerAdItem}>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li className={style.partnerAdItem}>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
        <li className={style.partnerAdItem}>
          <img className={style.adIcon} src={icon_1} alt="" />
        </li>
      </ul>
    </article>
  );
};
