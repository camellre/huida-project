import style from "./CountriesSlider.module.scss";
import antigua_flag from "../../assets/antigua_flag.webp";
import dominica_flag from "../../assets/dominica_flag.webp";
import grenada_flag from "../../assets/grenada_flag.webp";
import malta_flag from "../../assets/malta_flag.webp";
import portugal_flag from "../../assets/portugal_flag.webp";
import stkittis_flag from "../../assets/stkitts_flag.webp";
import turkey_flag from "../../assets/turkey_flag.webp";
import usa_flag from "../../assets/usa_flag.webp";
import antiguaBackground from "../../assets/antigua_barbuda.webp";
import dominicaBackground from "../../assets/dominica.webp";
import grenadaBackground from "../../assets/grenada.webp";
import maltaBackground from "../../assets/Malta.webp";
import portugalBackground from "../../assets/portugal.webp";
import stkittisBackground from "../../assets/st_kitts.webp";
import turkeyBackground from "../../assets/turkiye.webp";
import usaBackground from "../../assets/usa.webp";
import React, { useState } from "react";
import Button from "../../genericComponents/Button/Button";

export const CountriesSlider = () => {
  const [sliderShowIndex, setSliderShowIndex] = useState(0);
  const flagList = [
    antigua_flag,
    dominica_flag,
    grenada_flag,
    malta_flag,
    portugal_flag,
    stkittis_flag,
    turkey_flag,
    usa_flag,
  ];
  const antiguaContent = {
    title: "安提瓜与巴布达",
    bodyText:
      "作为加勒比海地区最受欢迎的第二公民身份项目之一，安提瓜和巴布达提供了许多优势和机会。该项目不仅能够帮助申请人获得安全、稳定的居住权，还可以享受包括签证便利、资产保护、税收优惠等在内的多种福利，是一个极具吸引力的选择。",
    ad_1: "3个月",
    ad_2: "4代入籍",
    ad_3: "10万美元起",
    background: antiguaBackground,
    to: "/citizenship/antigua",
  };

  const dominicaContent = {
    title: "多米尼加",
    bodyText:
      "获得多米尼加第二公民身份后,申请人可以获得该国护照，这是一个享有许多优势的护照，如可以免签或落地签证进入130多个国家和地区，包括欧洲、亚洲和南美洲等。此外，多米尼加的护照审批速度较快，通常只需要3个月即可获得。多米尼加的投资入籍方案相对于其他国家的方案来说，投资金额比较低，程序较为简单和迅速，这使得该项目吸引了许多投资者和家庭的关注。",
    ad_1: "3个月",
    ad_2: "130+免签国",
    ad_3: "10万美元起",
    background: dominicaBackground,
    to: "/citizenship/dominica",
  };

  const grenadaContent = {
    title: "格林纳达",
    bodyText:
      "格林纳达是一个位于加勒比海东南部的岛国，首都为圣乔治。拥有美丽的海滩和热带雨林风光，每年约吸引19万游客前往度假。格林纳达以高度重视公民福利而著名，其教育、医疗和税务政策惠民为国民提供了全面保障。林纳达护照在全球范围内具有较高的通行能力，可免签140多国家，全球开户。格林纳达是英联邦成员国之一，拥有稳定的民主政治体系，税务。格林纳达的投资入籍方案审批速度较快，通常只需要3-4个月即可获得格林纳达国籍和护照，这使得该项目成为许多人寻求第二公民身份的首选之一。",
    ad_1: "4个月",
    ad_2: "130+免签国",
    ad_3: "15万美元起",
    background: grenadaBackground,
    to: "/citizenship/grenada",
  };

  const maltaContent = {
    title: "马耳他",
    bodyText:
      "马耳他的投资入籍项目是全球最知名的之一，该项目要求申请人进行一定的投资才能获得马耳他国籍。根据规定，申请人需要通过购买不动产、国债、股权等方式投资至少95万欧元，并在获得居留权后保持投资至少1年。通常情况下，整个投资入籍程序需要12-14个月左右的时间，其中包括居留权审批、投资安排等环节。投资入籍程序期间需要支付一些相关费用。总体而言，马耳他的投资入籍项目要求投资金额较高，程序时间较长，但可以获得欧盟护照和高度的签证自由度，因此备受投资者的青睐。",
    ad_1: "1年",
    ad_2: "186免签国",
    ad_3: "95万欧元起",
    background: maltaBackground,
    to: "/citizenship/malta",
  };

  const portugalContent = {
    title: "葡萄牙",
    bodyText:
      "葡萄牙是一个美丽的欧洲国家，其第二公民身份项目是欧洲最有吸引力的之一。葡萄牙的第二公民身份项目可以为申请人提供在欧洲工作和生活的机会，以及享受许多社会福利和公共服务，如医疗保健和教育等。此外，葡萄牙还拥有优美的自然环境和丰富的文化历史，是一个理想的旅游胜地和生活地点。通过获得葡萄牙的第二公民身份，申请人可以享受到这些福利和优势，为其未来的发展和生活带来更多可能性。",
    ad_1: "3年",
    ad_2: "195免签国",
    ad_3: "35万欧元起",
    background: portugalBackground,
    to: "/citizenship/portugal",
  };

  const stkittisContent = {
    title: "圣基茨",
    bodyText:
      "圣基茨和尼维斯是一个加勒比海岛国，其第二公民身份项目是全球最受欢迎的之一。申请人获得第二公民身份后，将获得多种福利，包括免签证旅行、资产保护、税收优惠等，这些福利可以帮助申请人在国际商务和投资中获得更多机会和优势。此外，圣基茨的第二公民身份项目审批速度较快，通常只需要2-3个月即可获得，这使其成为许多人寻求第二公民身份的首选。因此，圣基茨的第二公民身份项目具有多种优势，为申请人带来了很多机会和便利。",
    ad_1: "8个月",
    ad_2: "139+免签国",
    ad_3: "30万美元起",
    background: stkittisBackground,
    to: "/citizenship/stkittis",
  };

  const turkeyContent = {
    title: "土耳其",
    bodyText:
      "土耳其是一个独特的地理位置位于欧亚大陆的国家，其第二公民身份项目也拥有很多优势。作为拥有多元文化、先进经济体和具有战略地位的国家，土耳其的第二公民身份能够为申请人带来免签证旅行、资产保护、税收优惠等在内的多种福利。此外，土耳其的第二公民身份还可以为申请人在国际商务和投资方面带来更多的机会和优势，为其未来的事业发展带来更多的可能性。",
    ad_1: "8个月",
    ad_2: "E2签证",
    ad_3: "30万美元起",
    background: turkeyBackground,
    to: "/citizenship/turkey",
  };

  const usaContent = {
    title: "美国",
    bodyText:
      "美国，全球超级大国，以其全面优势和护照实力吸引着无数高净值人士。作为美国公民，您将享受世界上最发达的福利制度，医疗、养老和社会保障等方面都堪称一流。美国家庭生活质量高，房产、税收和投资环境优越，使您的家庭生活更为稳定。此外，美国的教育资源世界领先，拥有哈佛、耶鲁等顶级名校，为子女提供广阔的发展空间。总之，入籍美国意味着获得更好的生活品质、优越的教育资源和全球通行的护照，是高净值人士理想的选择。",
    ad_1: "1-5年",
    ad_2: "130+免签国",
    ad_3: "15万美元起",
    background: usaBackground,
    to: "/citizenship/usa",
  };

  const contentList = [
    antiguaContent,
    dominicaContent,
    grenadaContent,
    maltaContent,
    portugalContent,
    stkittisContent,
    turkeyContent,
    usaContent,
  ];

  const handleFlagClick = (index: number) => {
    setSliderShowIndex(index);
  };

  return (
    <article className={style.sliderWrapper}>
      <ul className={style.flagWrapper}>
        {flagList.map((item, index) => (
          <li
            key={index}
            className={
              sliderShowIndex - index === 0
                ? [style.flagItemWrapper, style.flagItemActive].join(" ")
                : style.flagItemWrapper
            }
            onClick={() => handleFlagClick(index)}
          >
            <img src={item} alt="" />
          </li>
        ))}
      </ul>
      {contentList.map((item, index) => (
        <article
          key={index}
          className={style.contentItemWrapper}
          style={
            {
              "--slider-background": `url(${item.background})`,
              "--slider-translateX": `${-(sliderShowIndex - index) * 100}%`,
            } as React.CSSProperties
          }
        >
          <div className={style.contentShadow} />
          <div className={style.contentBodyWrapper}>
            <h2 className={style.contentBodyTitle}>{item.title}</h2>
            <p className={style.contentBodyText}>{item.bodyText}</p>
            <div className={style.contentAdWrapper}>
              <p className={style.contentAd_1}>{item.ad_1}</p>
              <p className={style.contentAd_2}>{item.ad_2}</p>
              <p className={style.contentAd_3}>{item.ad_3}</p>
            </div>
            <Button to={item.to} text="了解更多" theme={style.contentButton} />
          </div>
        </article>
      ))}
    </article>
  );
};
