import style from "./CountryPage.module.scss";
import Button from "../../genericComponents/Button/Button";
import React, { useEffect, useRef, useState } from "react";

interface BannerShowLogic {
  [key: string]: string;
}

interface CountryPageProps {
  country: { [key: string]: string };
}

export default function CountryPage({ country }: CountryPageProps) {
  const [bannerShow, setBannerShow] = useState("0");
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const handleBannerClick = (e: React.MouseEvent<HTMLElement>) => {
    elementsRef.current[parseInt(e.currentTarget.id.slice(-1))]?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  };

  const bannerShowLogic: BannerShowLogic = {
    law: "0",
    project: "100%",
    price: "200%",
    documents: "300%",
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
      { threshold: 0.6 }
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
      <section
        className={style.introImage}
        style={
          {
            "--country-image": `url(${country.countryImage})`,
          } as React.CSSProperties
        }
      >
        <h1 className={style.countryName}>{country.name}</h1>
      </section>
      <section className={style.introText}>
        <h2 className={style.introTextTitle}>{country.name}</h2>
        <p className={style.introTextContent}>{country.introText_1}</p>
        <p className={[style.introAdIcon, style.introAdIcon_1].join(" ")}>
          {country.ad_1}
          <br />
          {country.ad_2}
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_2].join(" ")}>
          {country.ad_3}
          <br />
          {country.ad_4}
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_3].join(" ")}>
          {country.ad_5}
          <br />
          {country.ad_6}
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_4].join(" ")}>
          {country.ad_7}
          <br />
          {country.ad_8}
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_5].join(" ")}>
          {country.ad_9}
          <br />
          {country.ad_10}
        </p>
        <p className={[style.introAdIcon, style.introAdIcon_6].join(" ")}>
          {country.ad_11}
          <br />
          {country.ad_12}
        </p>
      </section>
      <section className={style.bannerSentinel}>
        <div className={style.bannerBackground} />
        <div className={style.banner}>
          <p
            id="banner_0"
            onClick={handleBannerClick}
            className={style.bannerItem_1}
          >
            入籍法案
          </p>
          <p
            id="banner_1"
            onClick={handleBannerClick}
            className={style.bannerItem_2}
          >
            投资项目
          </p>
          <p
            id="banner_2"
            onClick={handleBannerClick}
            className={style.bannerItem_3}
          >
            费用估算
          </p>
          <p
            id="banner_3"
            onClick={handleBannerClick}
            className={style.bannerItem_4}
          >
            申请文件
          </p>
          <div
            style={
              {
                "--bannerUderline-position": bannerShow,
              } as React.CSSProperties
            }
            className={style.bannerUnderlineWrapper}
          >
            <div className={style.bannerUnderline} />
          </div>
        </div>
      </section>
      <section id="law" ref={addToRefs} className={style.law}>
        <img src={country.countryIcon} alt="" className={style.countryIcon} />
        <h2 className={style.lawTitle}>
          {country.name}
          <br />
          投资入籍简介
        </h2>
        <p className={style.lawText}>
          {country.introText_2}
          <br />
          <br />
          {country.introText_3}
          <br />
          <br />
          {country.introText_4}
        </p>
        <Button to=" " text="下载法案原件" theme={style.lawButton} />
      </section>
      <section id="project" ref={addToRefs} className={style.project}>
        <h2 className={style.projectTitle}>
          {country.projectTitle_1}
          <br />
          {country.projectTitle_2}
        </h2>

        <img src={country.countryImage} alt="" className={style.projectImage} />

        <h3 className={style.projectSubTitles_1}>申请条件</h3>

        <p className={style.projectText_1}>
          {country.projectText_1}
          <br />
          {country.projectText_2}
          <br />
          {country.projectText_3}
          <br />
          {country.projectText_4}
          <br />
          {country.projectText_5}
        </p>

        <h3 className={style.projectSubTitles_2}>申请费用</h3>

        <p className={style.projectText_2}>
          {country.projectText_6}
          <br />
          {country.projectText_7}
          <br />
          {country.projectText_8}
        </p>
      </section>
      <section id="price" ref={addToRefs} className={style.price}>
        <form className={style.formGrid}>
          <h2 className={style.priceTitle}>
            请填入以下信息
            <br />
            系统会跟进资料计算大概费用预算
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
            {country.priceProject_1}
          </label>

          <input
            className={style.projectInputsRadio}
            type="radio"
            id="realEstate"
          />
          <label className={style.projectInputsRadioLabel} htmlFor="realEstate">
            {country.priceProject_2}
          </label>

          <input className={style.projectInputsRadio} type="radio" id="stock" />
          <label className={style.projectInputsRadioLabel} htmlFor="stock">
            {country.priceProject_3}
          </label>

          <Button to=" " text="开始估算" theme={style.projectButton} />
        </form>
      </section>
      <section id="documents" ref={addToRefs} className={style.documents}>
        <h2 className={style.documentsTitle}>
          {country.name}
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
          <p>申请{country.name}投资入籍，您需要以下文件:</p>
          <p>{country.documents_1} </p>
          <p>{country.documents_2} </p>
          <p>{country.documents_3}</p>
          <p>{country.documents_4} </p>
          <p>{country.documents_5}</p>
          <p>{country.documents_6}</p>
          <p>{country.documents_7}</p>
          <p>{country.documents_8}</p>
          <p>{country.documents_9}</p>
          <p>{country.documents_10}</p>
          <p>{country.documents_11}</p>
          <p>其他文件要求</p>
          <p>文件要求清单</p>
        </div>
        <Button to="/contact" text="马上申请" theme={style.documentsButton} />
      </section>
    </main>
  );
}
