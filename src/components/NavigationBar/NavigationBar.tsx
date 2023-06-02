import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import Logo from "../Logo/Logo";
import style from "./NavigationBar.module.scss";
import mobileMenuSwitchIcon from "../../assets/menu-duo-md-svgrepo-com.svg";
import Button from "../../genericComponents/Button/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LanguageIcon } from "../../genericComponents/LanguageIcon/LanguageIcon";
import countryIcon_1 from "../../assets/antigua_Icon.webp";
import countryIcon_2 from "../../assets/dominica_icon.webp";
import countryIcon_3 from "../../assets/grenada_icon.webp";
import countryIcon_4 from "../../assets/malta_icon.webp";
import countryIcon_5 from "../../assets/portugal_icon.webp";
import countryIcon_6 from "../../assets/stkittis_icon.webp";
import countryIcon_7 from "../../assets/turkey_icon.webp";
import countryIcon_8 from "../../assets/usa_Icon.webp";

interface dropDownFunctionType {
  [key: string]: () => void;
}

export const NavigationBar = () => {
  const [dropDownList, setDropDownList] = useState([false, false, false]);
  const [mobileMenuSwitch, setMobileMenuSwitch] = useState(false);

  const dropDownFunction: dropDownFunctionType = {
    navLogo: () => {
      setDropDownList([false, false, false]);
    },
    navBar: () => {
      setDropDownList([false, false, false]);
    },
    homePage: () => {
      setDropDownList([false, false, false]);
    },
    immigrationService: () => {
      setDropDownList([true, true, false]);
    },
    otherService: () => {
      setDropDownList([false, false, false]);
    },
    contactUs: () => {
      setDropDownList([false, false, false]);
    },
  };

  const handleMouseMovement = (e: React.MouseEvent<HTMLElement>) => {
    const animationFunction = dropDownFunction[e.currentTarget.id];
    return animationFunction();
  };

  const handleMobileMenuSwitch = () => {
    if (!mobileMenuSwitch) return setMobileMenuSwitch(true);
    return setMobileMenuSwitch(false);
  };

  return (
    <nav
      id="navBar"
      onMouseLeave={handleMouseMovement}
      className={style.navBar}
    >
      <div className={style.navBarWrapper}>
        <Link
          id="navLogo"
          className={style.navBarLogoWrapper}
          onMouseEnter={handleMouseMovement}
          to="/"
        >
          <Logo />
        </Link>
        <menu className={[style.menuWrapper, style.menuFlexGrow].join(" ")}>
          <li className={style.menuItemWrapper}>
            <Link
              id="homePage"
              onMouseEnter={handleMouseMovement}
              className={style.menuItem}
              to="/"
            >
              首页
            </Link>
          </li>
          <li className={style.menuItemWrapper}>
            <Link
              id="immigrationService"
              onMouseEnter={handleMouseMovement}
              className={style.menuItem}
              to="/citizenship"
            >
              移民服务
            </Link>
          </li>
          <li className={style.menuItemWrapper}>
            <Link
              id="otherService"
              onMouseEnter={handleMouseMovement}
              className={style.menuItem}
              to="/service"
            >
              其他服务
            </Link>
          </li>
          <li className={style.menuItemWrapper}>
            <Link
              id="contactUs"
              onMouseEnter={handleMouseMovement}
              className={style.menuItem}
              to="/contact"
            >
              联系我们
            </Link>
          </li>
        </menu>
        <menu className={style.menuWrapper}>
          <li>
            <Link to={"/login"}>
              <Button theme={style.logInButton} text="Log In/Sign Up" />
            </Link>
          </li>
          <li>
            <Button theme={style.customerServiceButton} text="在线客服" />
          </li>
          <li>
            <LanguageIcon languageIconStyle={style.languageIcon} />
          </li>
        </menu>
        <menu className={style.mobileMenuSwitchWrapper}>
          <li onClick={handleMobileMenuSwitch}>
            <ImageWrapper
              imageSrc={mobileMenuSwitchIcon}
              imageStyle={style.mobileMenuSwitch}
            />
          </li>
        </menu>
      </div>
      <div
        className={
          dropDownList[0]
            ? [style.dropDownWrapper, style.dropDownWrapperShow].join(" ")
            : style.dropDownWrapper
        }
      >
        <menu
          className={
            dropDownList[1]
              ? [style.dropDownMenuWrapper, style.dropDownMenuWrapperShow].join(
                  " "
                )
              : style.dropDownMenuWrapper
          }
        >
          <Link to={"/citizenship/antigua"}>
            <li className={style.dropDownMenuItemWrapper}>
              <picture className={style.countryIconWrapper}>
                <img src={countryIcon_1} alt="" className={style.countryIcon} />
              </picture>
              <p className={style.countryName}>安提瓜</p>
            </li>
          </Link>
          <Link to={"/citizenship/dominica"}>
            <li className={style.dropDownMenuItemWrapper}>
              <picture className={style.countryIconWrapper}>
                <img
                  src={countryIcon_2}
                  alt=""
                  className={style.countryIcon_2}
                />
              </picture>
              <p className={style.countryName}>多米尼加</p>
            </li>
          </Link>
          <Link to={"/citizenship/grenada"}>
            <li className={style.dropDownMenuItemWrapper}>
              <picture className={style.countryIconWrapper}>
                <img src={countryIcon_3} alt="" className={style.countryIcon} />
              </picture>
              <p className={style.countryName}>格林纳达</p>
            </li>
          </Link>
          <Link to={"/citizenship/malta"}>
            <li className={style.dropDownMenuItemWrapper}>
              <picture className={style.countryIconWrapper}>
                <img src={countryIcon_4} alt="" className={style.countryIcon} />
              </picture>
              <p className={style.countryName}>马耳他</p>
            </li>
          </Link>
          <Link to={"/citizenship/portugal"}>
            <li className={style.dropDownMenuItemWrapper}>
              <picture className={style.countryIconWrapper}>
                <img
                  src={countryIcon_5}
                  alt=""
                  className={style.countryIcon_5}
                />
              </picture>
              <p className={style.countryName}>葡萄牙</p>
            </li>
          </Link>
          <Link to={"/citizenship/stkittis"}>
            <li className={style.dropDownMenuItemWrapper}>
              <picture className={style.countryIconWrapper}>
                <img src={countryIcon_6} alt="" className={style.countryIcon} />
              </picture>
              <p className={style.countryName}>圣基茨</p>
            </li>
          </Link>
          <Link to={"/citizenship/turkey"}>
            <li className={style.dropDownMenuItemWrapper}>
              <picture className={style.countryIconWrapper}>
                <img src={countryIcon_7} alt="" className={style.countryIcon} />
              </picture>
              <p className={style.countryName}>土耳其</p>
            </li>
          </Link>
          <Link to={"/citizenship/usa"}>
            <li className={style.dropDownMenuItemWrapper}>
              <picture className={style.countryIconWrapper}>
                <img src={countryIcon_8} alt="" className={style.countryIcon} />
              </picture>
              <p className={style.countryName}>美国</p>
            </li>
          </Link>
        </menu>
        <menu
          className={
            dropDownList[2]
              ? [style.dropDownMenuWrapper, style.dropDownMenuWrapperShow].join(
                  " "
                )
              : style.dropDownMenuWrapper
          }
        >
          <li className={style.dropDownMenuItemWrapper}>
            <Link to="service/visa" className={style.dropDownMenuItem}>
              签证代办
            </Link>
          </li>
          <li className={style.dropDownMenuItemWrapper}>
            <Link to="service/translate" className={style.dropDownMenuItem}>
              文件翻译
            </Link>
          </li>
          <li className={style.dropDownMenuItemWrapper}>
            <Link to="service/notary" className={style.dropDownMenuItem}>
              加州公证
            </Link>
          </li>
          <li className={style.dropDownMenuItemWrapper}>
            <Link to="service/otherservice" className={style.dropDownMenuItem}>
              其他服务
            </Link>
          </li>
        </menu>
      </div>
      <div
        className={
          mobileMenuSwitch
            ? [style.mobileMenuWrapper, style.mobileMenuWrapperShow].join(" ")
            : style.mobileMenuWrapper
        }
      >
        <menu className={style.mobileMenu}>
          <li className={style.mobileMenuItemWrapper}>
            <a className={style.mobileMenuItem} href="#">
              首页
            </a>
          </li>
          <li className={style.mobileMenuItemWrapper}>
            <a className={style.mobileMenuItem} href="#">
              移民服务
            </a>
          </li>
          <li className={style.mobileMenuItemWrapper}>
            <a className={style.mobileMenuItem} href="#">
              其他服务
            </a>
          </li>
          <li className={style.mobileMenuItemWrapper}>
            <a className={style.mobileMenuItem} href="#">
              联系我们
            </a>
          </li>
        </menu>
      </div>
    </nav>
  );
};
