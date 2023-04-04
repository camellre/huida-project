import Card from "../../genericComponents/Card/Card";
import Logo from "../Logo/Logo";
import style from "./Footer.module.scss";
import icon_1 from "../../assets/phone-call.svg";
import IconStatic from "../../genericComponents/IconStatic/IconStatic";

function Footer() {
  return (
    <footer>
      <div className={style.footerBackground}>
        <div className={style.footerContainer}>
          <Card
            childrenTop={
              <div className={style.cardTitleWrapper}>
                <Logo />
              </div>
            }
            childrenBottom={
              <div className={style.cardBodyWrapper}>
                <div className={style.footerItemWrapper}>
                  <h2>Contact</h2>
                  <div className={style.footerItemGridWrapper}>
                    <span className={style.footerItemText}>
                      500 Terry Francine Street San Francisco, CA 94158
                    </span>
                    <span className={style.footerItemText}>
                      Sales: info@mysite.com
                    </span>
                    <span className={style.footerItemText}>
                      General Inquiries: 123-456-7890
                    </span>
                    <span className={style.footerItemText}>
                      Customer Care: info@mysite.com
                    </span>
                  </div>
                </div>
                <div className={style.footerItemWrapper}>
                  <h2>Quik Links</h2>
                  <span>Terms & Conditions</span>
                  <span>Privacy Policy</span>
                </div>
                <div className={style.footerItemWrapper}>
                  <h2>Follow</h2>
                  <span>Sign up to get the latest news on our product.</span>
                  <span>Email</span>
                  <span>Thanks for subscribing!</span>
                </div>
                <div
                  className={[
                    style.footerItemWrapper,
                    style.footerItemWrapper_icon,
                  ].join(" ")}
                >
                  <IconStatic IconImage={icon_1} />
                  <IconStatic IconImage={icon_1} />
                  <IconStatic IconImage={icon_1} />
                  <IconStatic IconImage={icon_1} />
                  <IconStatic IconImage={icon_1} />
                  <IconStatic IconImage={icon_1} />
                </div>
              </div>
            }
          />
        </div>
      </div>
      <div className={style.footerBottemBar}>
        © 2035 by WeDu. Powered and secured by Wix
      </div>
    </footer>
  );
}

export default Footer;
