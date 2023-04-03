import Card from "../Card/Card";
import style from "./HomePageGrid.module.scss";
import homeImage_1 from "../../assets/family_1.svg";
import ImageContainer from "../../genericComponents/ImageContainer/ImageContainer";
import grenadaPassportFloat from "../../assets/Grenada-Passport.webp";

function HomePageGrid() {
  return (
    <div className={style.gridContainer}>
      <div className={style.gridItem}>
        <Card />
        <img
          className={style.grenadaPassportFloat}
          src={grenadaPassportFloat}
          alt=""
        />
      </div>
      <div className={style.gridItem}>
        <ImageContainer imageSource={homeImage_1} />
      </div>
      <div className={style.gridItem}>
        <Card />
      </div>
      <div className={style.gridItem}>
        <ImageContainer imageSource={homeImage_1} />
      </div>
      <div className={[style.gridItem, style.gridItem_1].join(" ")}>
        <Card />
      </div>
      <div className={style.gridItem}>
        <ImageContainer imageSource={homeImage_1} />
      </div>
      <div className={style.gridItem}>
        <Card />
      </div>
      <div className={style.gridItem}>
        <ImageContainer imageSource={homeImage_1} />
      </div>
    </div>
  );
}

export default HomePageGrid;
