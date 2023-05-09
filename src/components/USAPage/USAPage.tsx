import style from "./USAPage.module.scss";
import countryIcon from "../../assets/antigua_Icon.webp";
import Button from "../../genericComponents/Button/Button";
import countryImage from "../../assets/usa.webp";
import { useEffect, useRef, useState } from "react";

interface BannerShowLogic {
  [key: string]: string;
}

export const USAPage = () => {
  const [bannerShow, setBannerShow] = useState("16%");
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const bannerShowLogic: BannerShowLogic = {
    cbiLaw: "16%",
    condition: "36%",
    applicationFee: "56%",
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
    <main className={style.pageBackground}>
      <section className={style.landingPage}>
        <h1>美国</h1>
      </section>
      <section className={style.intro}>
        <article className={style.introWrapper}>
          <h2>美国</h2>
          <p>
            多米尼加（Dominica）是位于加勒比海东部的一座美丽的小岛，面积约750平方公里，拥有约72,000人口。这个岛国被称为“自然岛”，因为它有着世界上最美丽的自然风光和独特的生态环境。多米尼加的名字来源于拉丁文“Domenica”，意为星期日，因为哥伦布在1493年的一个星期日发现了这座岛屿。
            多米尼加是加勒比地区最为原始、自然的岛屿之一。这里的山峰、热带雨林、瀑布、河流和火山温泉构成了壮观的景色。这个国家的地形主要由火山构成，有许多活火山和休眠火山。莫里纳国家公园（Morne
            Trois Pitons National
            Park）是多米尼加的一大自然奇观，也是联合国教科文组织认定的世界自然遗产，拥有多米尼加最高峰莫里纳·迪亚布罗特（Morne
            Diablotins）。
            多米尼加的气候热带，四季如夏，阳光充足。这里的雨量充沛，滋养了丰富的植物和动物生态。在这片土地上，您可以找到各种热带水果和花卉，以及世界上最大的鹦鹉－帝王亚马逊鹦鹉。多米尼加还拥有加勒比海地区最大的沸腾湖泊，即“沸腾湖”，吸引着世界各地的游客前来探险。
            多米尼加人民热情友好，这里的文化深受加勒比海地区和非洲传统的影响。这个国家的官方语言是英语，但许多人也会说法语和克里奥尔语。多米尼加的音乐、舞蹈和艺术展现了这个国家的多元文化传统。加勒比海地区的风格和非洲传统音乐在这里融合成独特的多米尼加民间音乐，如“博卡”和“贝勒”。
          </p>
          <ul className={style.introAdIconWrapper}>
            <li className={[style.introAdIcon, style.introAdIcon_1].join(" ")}>
              139+
              <br />
              免签国
            </li>
            <li className={[style.introAdIcon, style.introAdIcon_2].join(" ")}>
              无语言
              <br />
              要求
            </li>
            <li className={[style.introAdIcon, style.introAdIcon_3].join(" ")}>
              无需
              <br />
              登陆
            </li>
            <li className={[style.introAdIcon, style.introAdIcon_4].join(" ")}>
              3个月
              <br />
              结办
            </li>
            <li className={[style.introAdIcon, style.introAdIcon_5].join(" ")}>
              身份
              <br />
              可传承
            </li>
            <li className={[style.introAdIcon, style.introAdIcon_6].join(" ")}>
              税收
              <br />
              友好
            </li>
          </ul>
        </article>
      </section>
      <section className={style.bannerWrapper}>
        <article className={style.banner}>
          <a href="#cbiLaw" className={style.bannerItem_1}>
            入籍法案
          </a>
          <a href="#condition" className={style.bannerItem_2}>
            投资项目
          </a>
          <a href="#applicationFee" className={style.bannerItem_3}>
            费用估算
          </a>
          <a href="#documents" className={style.bannerItem_4}>
            申请文件
          </a>
          <div
            style={
              {
                "--bannerUderline-position": bannerShow,
              } as React.CSSProperties
            }
            className={style.bannerUnderline}
          />
        </article>
      </section>
      <section id="cbiLaw" ref={addToRefs} className={style.sectionWrapper}>
        <article className={style.cbiLawWrapper}>
          <img src={countryIcon} alt="" className={style.countryIcon} />
          <h2>EB5 Program</h2>
          <h2>美国 投资入籍简介</h2>
          <p>
            安提瓜和巴布达是东加勒比地区的一个独立的英联邦国家。
            安提瓜和巴布达郁郁葱葱的热带岛屿拥有约 365
            个干净碧绿的海滩，是一个诱人的天堂，被认为是世界上最美丽的地方之一。
            因此，旅游业是国内生产总值 (GDP) 的主要驱动力，占该岛收入的 60%
            左右，主要目标市场是美国、加拿大和欧洲。
            <br />
            <br />
            安提瓜和巴布达是联合国、英联邦、加勒比共同体和美洲国家组织 (OAS)
            以及许多其他国际组织的成员。 安提瓜和巴布达护照持有人可免签前往约
            150 个国家，包括英国和申根区国家。
            <br />
            <br />
            投资入籍单位
            (CIU)由安提瓜和巴布达总理阁下设立，是负责处理所有代理执照申请以及申请人及其家人的所有投资入籍申请的政府机构。
          </p>
          <Button text="下载法案原件" />
        </article>
      </section>
      <section id="condition" ref={addToRefs} className={style.sectionWrapper}>
        <article className={style.conditionWrapper}>
          <h2>美国三种入籍模式可选，可快速六代入籍</h2>
          <div className={style.conditioinBodyWrapper}>
            <img src={countryImage} alt="" className={style.countryImage} />
            <div>
              <h3 className={style.conditionSubTitles}>申请条件</h3>
              <p>
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
              <h3 className={style.conditionSubTitles}>申请费用</h3>
              <p>
                1. 服务费：包括文件公证、文案及提交申请等服务费
                <br />
                2. 投资费：购房类40万美元起或捐款约10万美金
                <br />
                3. 政府规费：约每人1万美金左右
              </p>
            </div>
          </div>
        </article>
      </section>
      <section
        id="applicationFee"
        ref={addToRefs}
        className={style.sectionWrapper}
      >
        <form className={style.feeBodyWrapper}>
          <h2 className={style.feeBodyTitle}>
            请填入以下信息，系统会跟进资料计算大概费用预算
          </h2>
          <p>附属申请人数：</p>
          <ul className={style.peopleSelection}>
            <li>
              <label htmlFor="spouse">同行申请配偶</label>
              <select name="withSpouseOrNot" id="spouse">
                <option value="withSpouse">有配偶</option>
                <option value="withoutSpouse">无配偶</option>
              </select>
            </li>
            <li>
              <label htmlFor="unmarriedChild">未婚孩子</label>
              <input type="number" />
            </li>
            <li>
              <label htmlFor="parent">父母/配偶父母</label>
              <input type="number" />
            </li>
            <li>
              <label htmlFor="sibling">兄弟姐妹</label>
              <input type="number" />
            </li>
          </ul>
          <p>意向投资项目：</p>
          <ul className={style.projectSelection}>
            <li>
              <input type="radio" id="dnf" />
              <label htmlFor="dnf">国家发展基金（NDF）</label>
            </li>
            <li>
              <input type="radio" id="realEstate" />
              <label htmlFor="realEstate">汇达房地产项目</label>
            </li>
            <li>
              <input type="radio" id="stock" />
              <label htmlFor="stock">南湾股权项目</label>
            </li>
          </ul>
          <Button text="开始估算" />
        </form>
      </section>
      <section id="documents" ref={addToRefs} className={style.sectionWrapper}>
        <article className={style.documentBodyWrapper}>
          <div>
            <h2>
              美国
              <br />
              投资入籍流程与文件要求
            </h2>
            <ul className={style.applyStepWrapper}>
              <li className={style.applyStepBox_1}>
                联系客服
                <br />
                1.咨询申请详情
                <br />
                2.评估申请资格
                <br />
                3.确定申请人数
                <br />
                4.准备申请材料
              </li>
              <li className={style.applyStepBox_2}>
                提交申请
                <br />
                1.填写申请表
                <br />
                2.资料初步审核
                <br />
                3.提交申请费用
                <br />
                4.递交申请材料
              </li>
              <li className={style.applyStepBox_3}>
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
              </li>
            </ul>
          </div>
          <div>
            <div className={style.documentListWrapper}>
              <p>申请美国投资入籍，您需要以下文件</p>
              <p>Citizenship by Investment Application Form AB1 </p>
              <p>Photograph and Signature Certificate Form AB2 </p>
              <p>Medical Certificate Form AB3</p>
              <p>Investment Confirmation Form AB4 </p>
              <p>Agent Form Form AB5</p>
              <p>美国护照申请表</p>
              <p>Antigua & Barbuda Passport L Form (16 and older)</p>
              <p>Antigua & Barbuda Passport M Form (Under 16)</p>
              <p>投资入籍申报表</p>
              <p>Real Estate Developer Application Form AB8</p>
              <p>Business Investment Application Form AB9</p>
              <p>其他文件要求</p>
              <p>文件要求清单</p>
            </div>
            <Button text="马上申请" />
          </div>
        </article>
      </section>
    </main>
  );
};
