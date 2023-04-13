import style from "./OurServiceSection.module.scss";
import serviceCardImage_1 from "../../assets/card_1.png";
import serviceCardImage_2 from "../../assets/card_2.png";
import serviceCardImage_3 from "../../assets/card_3.png";
import serviceCardImage_4 from "../../assets/card_4.png";

export const OurServiceSection = () => {
  return (
    <article>
      <div>
        <h2>我们的服务</h2>
        <p>
          汇达移民咨询中心提供一系列便捷可靠的线上服务，包括多国移民咨询服务，签证办理服务，美国留学咨询与规划等24小时在线的咨询服务。无论何时何地都能为您解答有关格林纳达，土耳其，马耳他，美国，墨西哥，圣基茨，葡萄牙等多国的投资移民，美国留学与生活等疑问。支持国语，粤语，英文，俄语，越南语等多种语言的文字与语音交流，实现“汇聚一方
          愿望速达”的理念。
        </p>
      </div>
      <ul className={style.ourServiceCardWrapper}>
        <li className={style.ourServiceCardItemWrapper}>
          <img src={serviceCardImage_1} alt="" />
          <h3>咨询移民与留学</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </li>
        <li className={style.ourServiceCardItemWrapper}>
          <img src={serviceCardImage_2} alt="" />
          <h3>办理移民与留学</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </li>
        <li className={style.ourServiceCardItemWrapper}>
          <img src={serviceCardImage_3} alt="" />
          <h3>协办签证</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </li>
        <li className={style.ourServiceCardItemWrapper}>
          <img src={serviceCardImage_4} alt="" />
          <h3>加州公证</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </li>
      </ul>
    </article>
  );
};
