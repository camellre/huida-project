import Card from "../../genericComponents/Card/Card";
import ImageContainer from "../../genericComponents/ImageContainer/ImageContainer";
import style from "./OurServices.module.scss";
import cardImage_1 from "../../assets/card_1.png";
import cardImage_2 from "../../assets/card_2.png";
import cardImage_3 from "../../assets/card_3.png";
import cardImage_4 from "../../assets/card_4.png";

function OurServices() {
  return (
    <Card
      childrenTop={<h1 className={style.cardTitleContainer}>我们的服务</h1>}
      childrenBottom={
        <div className={style.cardBodyContainer}>
          <p>
            汇达移民咨询中心提供一系列便捷可靠的线上服务，包括多国移民咨询服务，签证办理服务，美国留学咨询与规划等24小时在线的咨询服务。无论何时何地都能为您解答有关格林纳达，土耳其，马耳他，美国，墨西哥，圣基茨，葡萄牙等多国的投资移民，美国留学与生活等疑问。支持国语，粤语，英文，俄语，越南语等多种语言的文字与语音交流，实现“汇聚一方
            愿望速达”的理念。
          </p>
          <div className={style.cardSubBodyContainer}>
            <Card
              childrenTop={
                <div className={style.subCardTitleContainer}>
                  <ImageContainer imageSource={cardImage_1} />
                  <h2>咨询移民与留学</h2>
                </div>
              }
              childrenBottom={
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I’m a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              }
            />
            <Card
              childrenTop={
                <div className={style.subCardTitleContainer}>
                  <ImageContainer imageSource={cardImage_2} />
                  <h2>办理移民与留学</h2>
                </div>
              }
              childrenBottom={
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I’m a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              }
            />
            <Card
              childrenTop={
                <div className={style.subCardTitleContainer}>
                  <ImageContainer imageSource={cardImage_3} />
                  <h2>协办签证</h2>
                </div>
              }
              childrenBottom={
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I’m a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              }
            />
            <Card
              childrenTop={
                <div className={style.subCardTitleContainer}>
                  <ImageContainer imageSource={cardImage_4} />
                  <h2>加州公证</h2>
                </div>
              }
              childrenBottom={
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I’m a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              }
            />
          </div>
        </div>
      }
    />
  );
}

export default OurServices;
