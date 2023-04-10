import style from "./Logo.module.scss";
import logo from "../../assets/huida-logo.svg";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";

function Logo() {
  return <ImageWrapper imageSrc={logo} imageStyle={style.logo} />;
}

export default Logo;
