import Logo from "../Logo/Logo";
import style from "./Footer.module.scss";
import iconFacebook from "../../assets/facebook-f.svg";
import { FacebookIcon } from "../../genericComponents/FacebookIcon/FacebookIcon";

function Footer() {
  return (
    <footer className={style.footerBackground}>
      <div className={style.footerWrapper}>
        <Logo logoWrapperStyle={style.footerLogoWrapper} />
        <ul className={style.footerGrid}>
          <li className={style.contact}>
            <h2>Contact</h2>
            <hr className={style.mobileBreakLine} />
          </li>
          <li className={style.address}>
            <p>
              500 Market Street
              <br />
              San Francisco CA, 94518
            </p>
          </li>
          <li className={style.salesEmail}>
            <p>
              Sales:
              <br />
              info@mysite.com
            </p>
          </li>
          <li className={style.phone}>
            <p>
              General Inquires:
              <br />
              123-456-7890
            </p>
          </li>
          <li className={style.supportEmail}>
            <p>
              Customer Care:
              <br />
              info@mysite.com
            </p>
          </li>

          <li className={style.quickLinks}>
            <h2>Quick Links</h2>
            <hr className={style.mobileBreakLine} />
          </li>
          <li className={style.term}>
            <p>Terms & Conditions</p>
          </li>
          <li className={style.policy}>
            <p>Privacy Policy</p>
          </li>

          <li className={style.follow}>
            <h2>Follow</h2>
            <hr className={style.mobileBreakLine} />
          </li>
          <li className={style.newsLetter}>
            <p>
              Sign up to get the latest <br />
              news on us.
            </p>
          </li>
          <li className={style.emailSub}>Email Subscribe</li>
          <li className={style.social}>
            <ul className={style.footerSocialIconWrapper}>
              <li>
                <FacebookIcon facebookIconStyle={style.footerSocialIcon} />
              </li>
              <li>
                <img src={iconFacebook} alt="" />
              </li>
              <li>
                <img src={iconFacebook} alt="" />
              </li>
              <li>
                <img src={iconFacebook} alt="" />
              </li>
              <li>
                <img src={iconFacebook} alt="" />
              </li>
              <li>
                <img src={iconFacebook} alt="" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p className={style.footerCopyright}>
        &copy; 2023 Hong Kong Huida Business Information Co., Ltd
      </p>
    </footer>
  );
}

export default Footer;
