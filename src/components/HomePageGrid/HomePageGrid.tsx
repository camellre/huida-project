import Card from "../HomeCard/Card";
import style from "./HomePageGrid.module.scss";
import homeImage_1 from "../../assets/family_1.svg";
import ImageContainer from "../../genericComponents/ImageContainer/ImageContainer";
import grenadaPassportFloat from "../../assets/Grenada-Passport.webp";
import React from "react";
import MaltaIntro from "../MaltaIntro/MaltaIntro";
import OurServices from "../OurServices/OurServices";
import CustomerService from "../CustomerService/CustomerService";
import Partnership from "../Partnership/Partnership";
import Feedback from "../Feedback/Feedback";

function HomePageGrid() {
  return (
    <div className={style.gridContainer}>
      <div className={style.gridItem}>
        <Card />
        {/* <img
          className={style.grenadaPassportFloat}
          src={grenadaPassportFloat}
          alt=""
        /> */}
      </div>
      <div className={style.gridItem}>
        <ImageContainer
          imageSource={homeImage_1}
          imageMaxWidth={{ "--max-width": "70%" } as React.CSSProperties}
        />
      </div>
      <div className={style.gridItem}>
        <ImageContainer imageSource={homeImage_1} />
      </div>
      <MaltaIntro />
      <div className={[style.gridItem, style.gridItem_1].join(" ")}>
        <OurServices />
      </div>
      <div className={style.gridItem}>
        <ImageContainer imageSource={homeImage_1} />
      </div>
      <div className={style.gridItem}>
        <CustomerService />
      </div>
      <div className={[style.gridItem, style.gridItem_1].join(" ")}>
        <Partnership />
      </div>
      <div className={[style.gridItem, style.gridItem_1].join(" ")}>
        <Feedback />
      </div>
    </div>
  );
}

export default HomePageGrid;
