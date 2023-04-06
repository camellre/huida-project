import style from "./Logo.module.scss";
import logo from "../../assets/huida-logo-svg.svg";

function Logo() {
  return (
    <span className={style.logoContainer}>
      <img className={style.logoImg} src={logo} />
    </span>
  );
}

export default Logo;
