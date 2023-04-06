import React, { useState } from "react";
import style from "./NavBar.module.scss";
import Icon from "../../genericComponents/Icon/Icon";
import NavBarImageUser from "../../assets/user.svg";
import NavBarImageSettings from "../../assets/settings.svg";
import Button from "../../genericComponents/Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function NavBar() {
  const iconContainer = <Icon IconImage={NavBarImageSettings} />;

  const [navBarStyle, setNavBarStyle] = useState(style.navBarBackground);

  const handleTogglerClick = () => {
    console.log(navBarStyle);
    if (navBarStyle === style.navBarBackground)
      return setNavBarStyle(style.navBarBackground + " " + style.navBarMobile);
    setNavBarStyle(style.navBarBackground);
  };

  return (
    <div className={navBarStyle}>
      <div className={style.navBarContainer}>
        <span onClick={handleTogglerClick} className={style.navBarToggler}>
          {iconContainer}
        </span>
        <Logo />
        <div className={style.navBarMenuContainer}>
          <div className={style.navBarMenuItemContainer}>
            <a className={style.navBarMenuItem} href="#home">
              关于汇达
            </a>
            <div className={style.navBarDropdownMenuContainer}>
              <a className={style.navBarDropdownMenuItem} href="#link1">
                汇达 1
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link2">
                汇达 2
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link3">
                汇达 3
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link4">
                汇达 4
              </a>
            </div>
          </div>
          <div className={style.navBarMenuItemContainer}>
            <a className={style.navBarMenuItem} href="#shop">
              移民服务
            </a>
            <div className={style.navBarDropdownMenuContainer}>
              <a className={style.navBarDropdownMenuItem} href="#link1">
                服务 1
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link2">
                服务 2
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link3">
                服务 3
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link4">
                服务 4
              </a>
            </div>
          </div>
          <div className={style.navBarMenuItemContainer}>
            <a className={style.navBarMenuItem} href="#aboutus">
              其他服务
            </a>
            <div className={style.navBarDropdownMenuContainer}>
              <a className={style.navBarDropdownMenuItem} href="#link1">
                其他服务 1
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link2">
                其他服务 2
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link3">
                其他服务 3
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link4">
                其他服务 4
              </a>
            </div>
          </div>
          <div className={style.navBarMenuItemContainer}>
            <a className={style.navBarMenuItem} href="#contactus">
              联系我们
            </a>
            <div className={style.navBarDropdownMenuContainer}>
              <a className={style.navBarDropdownMenuItem} href="#link1">
                联系 1
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link2">
                联系 2
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link3">
                联系 3
              </a>
              <a className={style.navBarDropdownMenuItem} href="#link4">
                联系 4
              </a>
            </div>
          </div>
        </div>
        <div className={style.navBarMenuToolContainer}>
          <Icon IconImage={NavBarImageUser} />
          {/* <Button theme="navBarButton" text="Log In" /> */}
          <Link to={"/login"}>
            <Button theme="navBarButton" text="Log In" />
          </Link>
        </div>
      </div>
      <div className={style.navBarMobileMenuContainer}>
        <a className={style.navBarMenuItem} href="#home">
          关于汇达
        </a>
        <a className={style.navBarMenuItem} href="#shop">
          移民服务
        </a>
        <a className={style.navBarMenuItem} href="#about">
          其他服务
        </a>
        <a className={style.navBarMenuItem} href="#contact">
          联系我们
        </a>
      </div>
    </div>
  );
}
