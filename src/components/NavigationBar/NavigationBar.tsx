import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import Logo from "../Logo/Logo";
import style from "./NavigationBar.module.scss";
import languageIcon from "../../assets/globe-1-svgrepo-com.svg";
import mobileMenuSwitchIcon from "../../assets/menu-duo-md-svgrepo-com.svg";
import Button from "../../genericComponents/Button/Button";
import React, { useState } from "react";

interface dropDownFunctionType {
  [key: string]: () => void;
}

export const NavigationBar = () => {
  const [dropDownList, setDropDownList] = useState([false, false, false]);
  const [mobileMenuSwitch, setMobileMenuSwitch] = useState(false);

  const dropDownFunction: dropDownFunctionType = {
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
      setDropDownList([true, false, true]);
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
        <Logo />
        <menu className={[style.menuWrapper, style.menuFlexGrow].join(" ")}>
          <li className={style.menuItemWrapper}>
            <a
              id="homePage"
              onMouseEnter={handleMouseMovement}
              className={style.menuItem}
              href="#"
            >
              首页
            </a>
          </li>
          <li className={style.menuItemWrapper}>
            <a
              id="immigrationService"
              onMouseEnter={handleMouseMovement}
              className={style.menuItem}
              href="#"
            >
              移民服务
            </a>
          </li>
          <li className={style.menuItemWrapper}>
            <a
              id="otherService"
              onMouseEnter={handleMouseMovement}
              className={style.menuItem}
              href="#"
            >
              其他服务
            </a>
          </li>
          <li className={style.menuItemWrapper}>
            <a
              id="contactUs"
              onMouseEnter={handleMouseMovement}
              className={style.menuItem}
              href="#"
            >
              联系我们
            </a>
          </li>
        </menu>
        <menu className={style.menuWrapper}>
          <li>
            <ImageWrapper
              imageSrc={languageIcon}
              imageStyle={style.languageIcon}
            />
          </li>
          <li>
            <Button theme={style.logInButton} text="Log In/Sign Up" />
          </li>
          <li>
            <Button theme={style.customerServiceButton} text="在线客服" />
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
          <a href="#" className={style.dropDownMenuItem}>
            移民服务1
          </a>
          <a href="#" className={style.dropDownMenuItem}>
            移民服务2
          </a>
          <a href="#" className={style.dropDownMenuItem}>
            移民服务3
          </a>
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
          <a href="#" className={style.dropDownMenuItem}>
            其他服务1
          </a>
          <a href="#" className={style.dropDownMenuItem}>
            其他服务2
          </a>
          <a href="#" className={style.dropDownMenuItem}>
            其他服务3
          </a>
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
