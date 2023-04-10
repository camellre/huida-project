import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import Logo from "../Logo/Logo";
import style from "./NavigationBar.module.scss";
import languageIcon from "../../assets/globe-1-svgrepo-com.svg";
import Button from "../../genericComponents/Button/Button";
import { useState } from "react";

export const NavigationBar = () => {
  const [show, setShow] = useState(style.dropDownMenuWrapper_1);

  const handleMenuClick = () => {
    if (show === style.dropDownMenuWrapper_1)
      return setShow(
        [style.dropDownMenuWrapper_1, style.dropDownMenuWrapperShow].join(" ")
      );
    return setShow(style.dropDownMenuWrapper_1);
  };

  return (
    <nav className={style.navBar}>
      <div className={style.navBarWrapper}>
        <Logo />
        <menu className={style.menuWrapper}>
          <li className={style.menuItemWrapper}>
            <a className={style.menuItem} href="#">
              首页
            </a>
          </li>
          <li className={style.menuItemWrapper}>
            <a onClick={handleMenuClick} className={style.menuItem} href="#">
              移民服务
            </a>
          </li>
          <li className={style.menuItemWrapper}>
            <a className={style.menuItem} href="#">
              其他服务
            </a>
          </li>
          <li className={style.menuItemWrapper}>
            <a className={style.menuItem} href="#">
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
      </div>
      <menu className={show}>
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
    </nav>
  );
};
