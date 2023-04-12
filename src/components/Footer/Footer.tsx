import Logo from "../Logo/Logo";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footerBackground}>
      <ul className={style.footerWrapper}>
        <li className={style.footerItemWrapper}>
          <Logo />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
