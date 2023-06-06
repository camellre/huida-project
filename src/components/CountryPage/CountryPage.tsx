import Button from "../../genericComponents/Button/Button";
import style from "./CountryPage.module.scss";
import countryIcon from "../../assets/antigua_Icon.webp";
import countryImage from "../../assets/antigua_barbuda.webp";
import { useEffect, useRef, useState } from "react";

interface BannerShowLogic {
  [key: string]: string;
}

export default function CountryPage() {
  const [bannerShow, setBannerShow] = useState("16%");
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const bannerShowLogic: BannerShowLogic = {
    cbiLaw: "16%",
    project: "36%",
    price: "56%",
    documents: "76%",
  };

  const addToRefs = (element: HTMLElement) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };

  useEffect(() => {
    const pageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBannerShow(bannerShowLogic[entry.target.id]);
          }
        });
      },
      { threshold: 0.9 }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        pageObserver.observe(element);
      }
    });
    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          pageObserver.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <main className={style.pageWrapper}>
      <section className={style.introImage}>
        <h1 className={style.countryName}>安提瓜与巴布达</h1>
      </section>
      <section className={style.introText}>
        <h2 className={style.introTextTitle}>安提瓜与巴布达</h2>
        <p className={style.introTextContent}>
          安提瓜和巴布达是一个位于加勒比海的小岛国，由两个主要岛屿组成：这个国家以其美丽的海滩、温和的气候、独特的历史和文化而闻名。安提瓜和巴布达是一个充满活力的旅游目的地，每年吸引着成千上万的游客前来度假。安提瓜和巴布达的首都是圣约翰，是一个充满活力的城市，有着丰富的历史、文化和娱乐场所。它还是一个繁忙的港口城市，是这个国家的经济、文化和政治中心。安提瓜和巴布达是一个自由市场经济，拥有稳定的政治和经济，是一个理想的投资目的地。同时，该国也是一个全球领先的第二公民身份计划提供国，可以为客户提供更多的国际灵活性和安全保障。总的来说，安提瓜和巴布达是一个美丽的国家，具有丰富的历史、文化和现代化的经济，是一个理想的旅游、生活和投资目的地。
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_1].join(" ")}>
          139+
          <br />
          免签国
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_2].join(" ")}>
          无语言
          <br />
          要求
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_3].join(" ")}>
          无需
          <br />
          登陆
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_4].join(" ")}>
          3个月
          <br />
          结办
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_5].join(" ")}>
          身份
          <br />
          可传承
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_6].join(" ")}>
          税收
          <br />
          友好
        </p>
      </section>
      <section className={style.banner}>
        <a href="#law" className={style.bannerItem_1}>
          入籍法案
        </a>
        <a href="#project" className={style.bannerItem_2}>
          投资项目
        </a>
        <a href="#price" className={style.bannerItem_3}>
          费用估算
        </a>
        <a href="#documents" className={style.bannerItem_4}>
          申请文件
        </a>
        <div
          className={style.bannerUnderline}
          style={
            {
              "--bannerUderline-position": bannerShow,
            } as React.CSSProperties
          }
        />
      </section>
      <section id="law" ref={addToRefs} className={style.law}>
        <img src={countryIcon} alt="" className={style.countryIcon} />
        <h2 className={style.lawTitle}>
          安提瓜和巴布达
          <br />
          投资入籍简介
        </h2>
        <p className={style.lawText}>
          安提瓜和巴布达是东加勒比地区的一个独立的英联邦国家。
          安提瓜和巴布达郁郁葱葱的热带岛屿拥有约 365
          个干净碧绿的海滩，是一个诱人的天堂，被认为是世界上最美丽的地方之一。
          因此，旅游业是国内生产总值 (GDP) 的主要驱动力，占该岛收入的 60%
          左右，主要目标市场是美国、加拿大和欧洲。
          <br />
          <br />
          安提瓜和巴布达是联合国、英联邦、加勒比共同体和美洲国家组织 (OAS)
          以及许多其他国际组织的成员。 安提瓜和巴布达护照持有人可免签前往约 150
          个国家，包括英国和申根区国家。
          <br />
          <br />
          投资入籍单位
          (CIU)由安提瓜和巴布达总理阁下设立，是负责处理所有代理执照申请以及申请人及其家人的所有投资入籍申请的政府机构。
        </p>
        <Button text="下载法案原件" theme={style.lawButton} />
      </section>
      <section id="project" ref={addToRefs} className={style.project}>
        <h2 className={style.projectTitle}>
          安提瓜三种入籍模式可选
          <br />
          可快速六代入籍
        </h2>

        <img src={countryImage} alt="" className={style.projectImage} />

        <h3 className={style.projectSubTitles_1}>申请条件</h3>

        <p className={style.projectText_1}>
          1. 主申请人年满18周岁，无犯罪记录
          <br />
          2. 满足政府要求的投资条件（三选一）
          <br />
          *向政府捐款10万美金起
          <br />
          *购买40万美元以上房产
          <br />
          *投资40万美元以上获批商业项目（可获得部分股息即时返还）
        </p>

        <h3 className={style.projectSubTitles_2}>申请费用</h3>

        <p className={style.projectText_2}>
          1. 服务费：包括文件公证、文案及提交申请等服务费
          <br />
          2. 投资费：购房类40万美元起或捐款约10万美金
          <br />
          3. 政府规费：约每人1万美金左右
        </p>
      </section>
      <section id="price" ref={addToRefs} className={style.price}>
        <form className={style.formGrid}>
          <h2 className={style.priceTitle}>
            请填入以下信息，系统会跟进资料计算大概费用预算
          </h2>
          <p className={style.pricePersonNumber}>附属申请人数：</p>

          <label className={style.projectLabels} htmlFor="spouse">
            同行申请配偶
          </label>
          <select
            className={style.projectInputs}
            name="withSpouseOrNot"
            id="spouse"
          >
            <option value="withSpouse">有配偶</option>
            <option value="withoutSpouse">无配偶</option>
          </select>

          <label className={style.projectLabels} htmlFor="unmarriedChild">
            未婚孩子
          </label>
          <input className={style.projectInputs} type="number" />

          <label className={style.projectLabels} htmlFor="parent">
            父母/配偶父母
          </label>
          <input className={style.projectInputs} type="number" />

          <label className={style.projectLabels} htmlFor="sibling">
            兄弟姐妹
          </label>
          <input className={style.projectInputs} type="number" />

          <p className={style.priceProject}>意向投资项目：</p>

          <input className={style.projectInputsRadio} type="radio" id="dnf" />
          <label className={style.projectInputsRadioLabel} htmlFor="dnf">
            国家发展基金（NDF）
          </label>

          <input
            className={style.projectInputsRadio}
            type="radio"
            id="realEstate"
          />
          <label className={style.projectInputsRadioLabel} htmlFor="realEstate">
            汇达房地产项目
          </label>

          <input className={style.projectInputsRadio} type="radio" id="stock" />
          <label className={style.projectInputsRadioLabel} htmlFor="stock">
            南湾股权项目
          </label>

          <Button text="开始估算" theme={style.projectButton} />
        </form>
      </section>
      <section id="documents" ref={addToRefs} className={style.documents}>
        <h2 className={style.documentsTitle}>
          安提瓜和巴布达
          <br />
          投资入籍流程与文件要求
        </h2>

        <p className={style.applyStepBox_1}>
          联系客服
          <br />
          1.咨询申请详情
          <br />
          2.评估申请资格
          <br />
          3.确定申请人数
          <br />
          4.准备申请材料
        </p>
        <p className={style.applyStepBox_2}>
          提交申请
          <br />
          1.填写申请表
          <br />
          2.资料初步审核
          <br />
          3.提交申请费用
          <br />
          4.递交申请材料
        </p>
        <p className={style.applyStepBox_3}>
          完成入籍
          <br />
          1.通过背景调查
          <br />
          2.完成投资手续
          <br />
          3.宣誓入籍
          <br />
          4.提交护照申请
          <br />
          5.签收入籍文件
        </p>

        <div className={style.documentsListWrapper}>
          <p>申请安提瓜投资入籍，您需要以下文件</p>
          <p>Citizenship by Investment Application Form AB1 </p>
          <p>Photograph and Signature Certificate Form AB2 </p>
          <p>Medical Certificate Form AB3</p>
          <p>Investment Confirmation Form AB4 </p>
          <p>Agent Form Form AB5</p>
          <p>安提瓜护照申请表</p>
          <p>Antigua & Barbuda Passport L Form (16 and older)</p>
          <p>Antigua & Barbuda Passport M Form (Under 16)</p>
          <p>投资入籍申报表</p>
          <p>Real Estate Developer Application Form AB8</p>
          <p>Business Investment Application Form AB9</p>
          <p>其他文件要求</p>
          <p>文件要求清单</p>
        </div>
        <Button text="马上申请" theme={style.documentsButton} />
      </section>
    </main>
  );
}
