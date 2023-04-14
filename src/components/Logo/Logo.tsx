import style from "./Logo.module.scss";
import logo from "../../assets/huida-logo.svg";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";

interface LogoProps {
  logoWrapperStyle?: string;
}

function Logo({ logoWrapperStyle }: LogoProps) {
  return (
    <ImageWrapper
      imageSrc={logo}
      imageStyle={style.logo}
      wrapperStyle={logoWrapperStyle}
      imageAlt="Huida Logo"
    />
  );
}

export default Logo;
