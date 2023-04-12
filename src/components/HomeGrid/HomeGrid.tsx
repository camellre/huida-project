import style from "./HomeGrid.module.scss";
import Card from "../../genericComponents/Card/Card";
import Button from "../../genericComponents/Button/Button";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import icon_1 from "../../assets/pinpaper-plus-svgrepo-com.svg";
import image_1 from "../../assets/family_1.svg";
import serviceCardImage_1 from "../../assets/card_1.png";
import serviceCardImage_2 from "../../assets/card_2.png";
import serviceCardImage_3 from "../../assets/card_3.png";
import serviceCardImage_4 from "../../assets/card_4.png";
import image_2 from "../../assets/home_3.png";
import feedbackBackground_1 from "../../assets/card_5.png";
import feedbackBackground_2 from "../../assets/card_6.png";
import feedbackBackground_3 from "../../assets/card_7.png";

export const HomeGrid = () => {
  return (
    <main className={style.homeGrid}>
      <section className={style.gridItemWrapper}>
        <Card
          childrenTop={
            <h1>
              格林纳达
              <br />
              热门第二身份国家
            </h1>
          }
          childrenBottom={
            <div>
              <p>130万元人民币投资入籍 半年获批 E2签证福利</p>
              <Button text="更多详情" />
              <ul className={style.grenadaAdWrapper}>
                <li className={style.grenadaAdItem}>
                  <ImageWrapper
                    imageSrc={icon_1}
                    imageStyle={style.grenadaAdIcon}
                  />
                  <p>
                    快速获批
                    <br />
                    无全球征税
                  </p>
                </li>
                <li className={style.grenadaAdItem}>
                  <ImageWrapper
                    imageSrc={icon_1}
                    imageStyle={style.grenadaAdIcon}
                  />
                  <p>
                    无需登陆面
                    <br />
                    签149国家
                  </p>
                </li>
                <li className={style.grenadaAdItem}>
                  <ImageWrapper
                    imageSrc={icon_1}
                    imageStyle={style.grenadaAdIcon}
                  />
                  <p>
                    E2签证
                    <br />
                    跳板美国
                  </p>
                </li>
              </ul>
            </div>
          }
          cardStyle={style.gridItem}
        />
      </section>
      <section className={style.gridItemWrapper}>
        <img src={image_1} alt="" />
      </section>
      <section className={style.gridItemWrapper}>
        <img src={image_1} alt="" />
      </section>
      <section className={style.gridItemWrapper}>
        <Card
          childrenTop={
            <h2>
              ​马耳他黄金欧盟永居
              <br />
              Malta - 优质欧盟护照
            </h2>
          }
          childrenBottom={
            <ul className={style.maltaCardBottom}>
              <li>
                <p>
                  马耳他坐落于地中海中心，全年气候温和，阳光充足，语言以英语为主，
                  教育为英式教育，
                  国家经济以金融、服务业、旅游业为主。马耳他失业率低于欧盟平均水平，
                  企业税率低至5%，医疗方面实行全民医保，医疗体系排名全球第五，成为近年来的明星移民国家。
                  <br />
                  马耳他是世界上唯一的“四位一体国”（申根国、欧元区、欧盟成员国、英联邦国家），
                  有南欧“瑞士”、欧洲“新加坡”之称，
                  同时也是移民圈中非常热门的一个移民国家，
                  长期都受到很多移民申请人的青睐。
                </p>
              </li>
              <li className={style.maltaCardButtonWrapper}>
                <Button text="了解更多" />
              </li>
            </ul>
          }
          cardStyle={style.gridItem}
        />
      </section>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <Card
          childrenTop={
            <div>
              <h2>我们的服务</h2>
              <p>
                汇达移民咨询中心提供一系列便捷可靠的线上服务，包括多国移民咨询服务，签证办理服务，美国留学咨询与规划等24小时在线的咨询服务。无论何时何地都能为您解答有关格林纳达，土耳其，马耳他，美国，墨西哥，圣基茨，葡萄牙等多国的投资移民，美国留学与生活等疑问。支持国语，粤语，英文，俄语，越南语等多种语言的文字与语音交流，实现“汇聚一方
                愿望速达”的理念。
              </p>
            </div>
          }
          childrenBottom={
            <ul className={style.ourServiceCardWrapper}>
              <li className={style.ourServiceCardItemWrapper}>
                <img src={serviceCardImage_1} alt="" />
                <h3>咨询移民与留学</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I'm a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              </li>
              <li className={style.ourServiceCardItemWrapper}>
                <img src={serviceCardImage_2} alt="" />
                <h3>办理移民与留学</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I'm a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              </li>
              <li className={style.ourServiceCardItemWrapper}>
                <img src={serviceCardImage_3} alt="" />
                <h3>协办签证</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I'm a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              </li>
              <li className={style.ourServiceCardItemWrapper}>
                <img src={serviceCardImage_4} alt="" />
                <h3>加州公证</h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I'm a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
              </li>
            </ul>
          }
          cardStyle={style.gridItem}
        />
      </section>
      <section className={style.gridItemWrapper}>
        <img src={image_2} alt="" />
      </section>
      <section className={style.gridItemWrapper}>
        <article className={style.customerSupportWrapper}>
          <h2>诚信服务 一呼万应</h2>
          <p>
            我们的在线AI客服小苹果，是您的贴身小顾问，任何时候都可以与小苹果对话，咨询任何于我们的项目详情与预约真人客服对接。无惧风雨，无视距离，一呼万应！
          </p>
          <ul className={style.supportAdWrapper}>
            <li className={style.supportAdItemWrapper}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
              <p>
                多种语言
                <br />
                实时对话
              </p>
            </li>
            <li className={style.supportAdItemWrapper}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
              <p>
                24小时
                <br />
                在线咨询
              </p>
            </li>
            <li className={style.supportAdItemWrapper}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
              <p>
                支持语音
                <br />
                文字功能
              </p>
            </li>
          </ul>
          <ul className={style.supportAdWrapper}>
            <li>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li>
              <Button text="呼叫小苹果" />
            </li>
          </ul>
          <ul className={style.supportAdWrapper}>
            <li>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
          </ul>
          <p>​欢迎关注公众平台了解汇达移民咨询中心的动态</p>
        </article>
      </section>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <article>
          <h2>我们的合作伙伴</h2>
          <div className={style.partnerSubTitleWrapper}>
            <p>
              合作是汇达移民咨询中心工作的核心。我们为全球客户创造国际机遇，积极构建与客户之间的相互融合及信任。我们希望与合作伙伴一同来实现这个愿景。我们的合作可以汇聚创造力、深化影响力以达成共赢。诚邀您成为汇达移民服务咨询中心的合作伙伴，让我们的服务，为您的企业赢得先机。
              如果您有兴趣与我们合作，请随时与我们联系。
            </p>
            <Button text="发送留言" />
          </div>
          <ul className={style.partnerAdWrapper}>
            <li className={style.partnerAdItem}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li className={style.partnerAdItem}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li className={style.partnerAdItem}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li className={style.partnerAdItem}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li className={style.partnerAdItem}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li className={style.partnerAdItem}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li className={style.partnerAdItem}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
            <li className={style.partnerAdItem}>
              <img className={style.grenadaAdIcon} src={icon_1} alt="" />
            </li>
          </ul>
        </article>
      </section>
      <section className={[style.gridItemWrapper, style.grid2Cols].join(" ")}>
        <article>
          <h2>我们的客户反馈</h2>
          <ul className={style.feedbackWrapper}>
            <li className={style.feedbackItemWrapper}>
              <img src={feedbackBackground_1} alt="" />
            </li>
            <li className={style.feedbackItemWrapper}>
              <img src={feedbackBackground_2} alt="" />
            </li>
            <li className={style.feedbackItemWrapper}>
              <img src={feedbackBackground_3} alt="" />
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};
