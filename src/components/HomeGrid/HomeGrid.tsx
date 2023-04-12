import style from "./HomeGrid.module.scss";
import Card from "../../genericComponents/Card/Card";
import Button from "../../genericComponents/Button/Button";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import icon_1 from "../../assets/pinpaper-plus-svgrepo-com.svg";
import image_1 from "../../assets/family_1.svg";

export const HomeGrid = () => {
  return (
    <main className={style.homeGridWrapper}>
      <section className={style.gridItemWrapper}>
        <Card
          childrenTop={<h1>格林纳达热门第二身份国家</h1>}
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
                  <p>快速获批无全球征税</p>
                </li>
                <li className={style.grenadaAdItem}>
                  <ImageWrapper
                    imageSrc={icon_1}
                    imageStyle={style.grenadaAdIcon}
                  />
                  <p>无需登陆面签149国家</p>
                </li>
                <li className={style.grenadaAdItem}>
                  <ImageWrapper
                    imageSrc={icon_1}
                    imageStyle={style.grenadaAdIcon}
                  />
                  <p>E2签证跳板美国</p>
                </li>
              </ul>
            </div>
          }
          cardStyle={style.gridItem}
        />
      </section>
      <section className={style.gridItemWrapper}>
        <img className={style.image_1} src={image_1} alt="" />
      </section>
      <section className={style.gridItemWrapper}>Grid Item</section>
      <section className={style.gridItemWrapper}>Grid Item</section>
      <section className={style.gridItemWrapper}>Grid Item</section>
      <section className={style.gridItemWrapper}>Grid Item</section>
      <section className={style.gridItemWrapper}>Grid Item</section>
      <section className={style.gridItemWrapper}>Grid Item</section>
    </main>
  );
};
