import NavBar from "../../components/NavBar/NavBar";
import Icon from "../../genericComponents/Icon/Icon";
import style from "./LogInPage.module.scss";
import icon_1 from "../../assets/Google.svg";
import icon_2 from "../../assets/Facebook.svg";
import icon_3 from "../../assets/WhatsApp.svg";
import backGroundImage_1 from "../../assets/rectangle_2.svg";
import { Link } from "react-router-dom";

function LogInPage() {
  return (
    <>
      <NavBar />
      <div className={style.logInPageWrapper}>
        <div className={style.logInBoxWrapper}>
          <div className={style.logInLeftSubBoxWrapper}>
            <h1 className={style.loginBoxLogoTitle}>汇达移民</h1>
            <img
              className={style.logInQRCodeWrapper}
              src={backGroundImage_1}
              alt=""
            />
          </div>
          <div className={style.logInSubBoxWrapper}>
            <div>
              <h1>登录/注册</h1>
            </div>
            <form className={style.logInFormWrapper} action="">
              <label htmlFor="userId">邮箱</label>
              <input
                className={style.logInInputBox}
                type="text"
                id="userId"
                placeholder="输入Email邮箱地址"
              />
              <label htmlFor="password">密码</label>
              <input
                className={style.logInInputBox}
                type="text"
                id="password"
                placeholder="输入密码"
              />
              <div className={style.logInButtonWrapper}>
                <button className={style.logInButton}>注册新用户</button>
                <span>已有账户？</span>
                <Link to={"/account"}>
                  <button>登录</button>
                </Link>
              </div>
            </form>
            <div>-or-</div>
            <div className={style.logInIconWrapper}>
              <Icon IconImage={icon_1} />
              <Icon IconImage={icon_2} />
              <Icon IconImage={icon_3} />
            </div>
            <div className={style.logInTermsWrapper}>
              <input type="checkbox" />
              <span>
                同意并阅读《汇达移民网络服务使用协议》和《汇达移民用户隐私条款》
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogInPage;
