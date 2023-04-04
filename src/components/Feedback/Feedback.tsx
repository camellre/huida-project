import Card from "../../genericComponents/Card/Card";
import style from "./Feedback.module.scss";
import cardBackground_1 from "../../assets/card_5.png";
import cardBackground_2 from "../../assets/card_6.png";
import cardBackground_3 from "../../assets/card_7.png";
import ImageContainer from "../../genericComponents/ImageContainer/ImageContainer";

function Feedback() {
  return (
    <Card
      childrenTop={<h1 className={style.cardTitleWrapper}>我们的客户反馈</h1>}
      childrenBottom={
        <div className={style.cardBodyWrapper}>
          <span className={style.feedBackCardWrapper}>
            <ImageContainer imageSource={cardBackground_1} />
            <p className={style.feedBackCardText}>
              "我是一名数据分析师，在美国大学毕业的时候一直担心H1B抽不中，要面临回国的问题，汇达服务咨询中心为我提供了很多留美方案，最终我选择在洛杉矶开了一个数据分析公司，申请了E2签证，现在与很多调研公司合作，自己当老板做着自己最喜欢的工作，有了很好的发展，谢谢汇达。"
            </p>
            <p className={style.feedBackCardName}>Deena Levies, LA, USA</p>
          </span>
          <span className={style.feedBackCardWrapper}>
            <ImageContainer imageSource={cardBackground_2} />
            <p className={style.feedBackCardText}>
              "我是来自美国的商人，我的产业来自多个国家，为了解决美国全球征税的双重税收问题，我考虑入籍格林纳达国家，汇达的专业，让我无需出国很快就获得了护照，并且实时追踪申请进度，让我非常放心........."
            </p>
            <p className={style.feedBackCardName}>
              Tom Smithenson, New York, USA
            </p>
          </span>
          <span className={style.feedBackCardWrapper}>
            <ImageContainer imageSource={cardBackground_3} />
            <p className={style.feedBackCardText}>
              “
              汇达在我刚移民来加州的时候，提供了很多帮助，包括如填写申请表，考取驾照，透过汇达的真人客服的服务，在硅谷置业，买了一套校区评价很高的房子，解决了我人生地不熟还语言不通的烦恼，现在一家人在美国生活非常安逸。”
            </p>
            <p className={style.feedBackCardName}>Tong Chan， Guang Zhou, CN</p>
          </span>
        </div>
      }
    />
  );
}

export default Feedback;
