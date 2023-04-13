import Logo from "../Logo/Logo";
import style from "./Footer.module.scss";
import icon from "../../assets/Facebook.svg";

function Footer() {
  return (
    <footer className={style.footerBackground}>
      <div className={style.footerWrapper}>
        <div className={style.footerLogoWrapper}>
          <Logo />
        </div>
        <ul className={style.footerItemWrapper}>
          <li>
            <ul className={style.footerContactWrapper}>
              <li>
                <h2>Contact</h2>
                <p>
                  500 Market Street
                  <br />
                  San Francisco CA, 94518
                </p>
                <p>
                  Sales:
                  <br />
                  info@mysite.com
                </p>
              </li>
              <li>
                <p>
                  General Inquires:
                  <br />
                  123-456-7890
                </p>
                <p>
                  Customer Care:
                  <br />
                  info@mysite.com
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <h2>Quick Links</h2>
              </li>
              <li>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <h2>Follow</h2>
              </li>
              <li>
                <p>
                  Sign up to get the latest <br />
                  news on us.
                </p>
              </li>
              <li>Email Subscribe</li>
            </ul>
          </li>
          <li>
            <ul className={style.footerSocialIcon}>
              <li>
                <img src={icon} alt="" />
              </li>
              <li>
                <img src={icon} alt="" />
              </li>
              <li>
                <img src={icon} alt="" />
              </li>
              <li>
                <img src={icon} alt="" />
              </li>
              <li>
                <img src={icon} alt="" />
              </li>
              <li>
                <img src={icon} alt="" />
              </li>
            </ul>
          </li>
        </ul>
        <p className={style.footerCopyright}>2023 by Huida</p>
      </div>
    </footer>
  );
}

export default Footer;
