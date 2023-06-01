import Logo from "../Logo/Logo";
import style from "./Footer.module.scss";
import { FacebookIcon } from "../../genericComponents/FacebookIcon/FacebookIcon";
import { TwitterIcon } from "../../genericComponents/TwitterIcon/TwitterIcon";
import { InstagramIcon } from "../../genericComponents/InstagramIcon/InstagramIcon";
import { TiktokIcon } from "../../genericComponents/TiktokIcon/TiktokIcon";
import { YoutubeIcon } from "../../genericComponents/YoutubeIcon/YoutubeIcon";
import { WeiboIcon } from "../../genericComponents/WeiboIcon/WeiboIcon";

function Footer() {
  return (
    <footer className={style.footerBackground}>
      <div className={style.footerWrapper}>
        <Logo logoWrapperStyle={style.footerLogoWrapper} />
        <h2 className={[style.footerItem, style.contact].join(" ")}>Contact</h2>
        <hr className={style.mobileBreakLine} />
        <p className={[style.footerItem, style.address].join(" ")}>
          500 Market Street
          <br />
          San Francisco CA, 94518
        </p>
        <p className={[style.footerItem, style.salesEmail].join(" ")}>
          Sales:
          <br />
          info@mysite.com
        </p>
        <p className={[style.footerItem, style.phone].join(" ")}>
          General Inquires:
          <br />
          123-456-7890
        </p>
        <p className={[style.footerItem, style.supportEmail].join(" ")}>
          Customer Care:
          <br />
          info@mysite.com
        </p>

        <h2 className={[style.footerItem, style.quickLinks].join(" ")}>
          Quick Links
        </h2>
        <hr className={style.mobileBreakLine} />

        <a className={[style.footerItem, style.term].join(" ")}>
          Terms & Conditions
        </a>

        <a className={[style.footerItem, style.policy].join(" ")}>
          Privacy Policy
        </a>

        <h2 className={[style.footerItem, style.follow].join(" ")}>Follow</h2>
        <hr className={style.mobileBreakLine} />

        <a className={[style.footerItem, style.newsLetter].join(" ")}>
          Sign up to get the latest <br />
          news on us.
        </a>

        <a className={[style.footerItem, style.emailSub].join(" ")}>
          Email Subscribe
        </a>

        <ul className={style.socialIconWrapper}>
          <li>
            <FacebookIcon facebookIconStyle={style.footerSocialIcon} />
          </li>
          <li>
            <TwitterIcon twitterIconStyle={style.footerSocialIcon} />
          </li>
          <li>
            <InstagramIcon instagramIconStyle={style.footerSocialIcon} />
          </li>
          <li>
            <TiktokIcon tiktokIconStyle={style.footerSocialIcon} />
          </li>
          <li>
            <YoutubeIcon youtubeIconStyle={style.footerSocialIcon} />
          </li>
          <li>
            <WeiboIcon weiboIconStyle={style.footerSocialIcon} />
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
