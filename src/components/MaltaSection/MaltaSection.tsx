import style from "./MaltaSection.module.scss";
import Button from "../../genericComponents/Button/Button";

export const MaltaSection = () => {
  return (
    <article>
      <h2>
        马耳他黄金欧盟永居
        <br />
        Malta - 优质欧盟护照
      </h2>
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
    </article>
  );
};
