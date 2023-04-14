import style from "./LogInPage.module.scss";
import icon_1 from "../../assets/Google.svg";
import icon_2 from "../../assets/Facebook.svg";
import icon_3 from "../../assets/WhatsApp.svg";
import QRCode from "../../assets/rectangle_2.svg";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";

function LogInPage() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className={style.logInPageWrapper}>
        <div className={style.logInBoxWrapper}>
          <div className={style.logInQRCodeWrapper}>
            <h2>汇达移民</h2>
            <ImageWrapper imageSrc={QRCode} wrapperStyle={style.logInQRCode} />
          </div>
          <div className={style.logInWrapper}>
            <h1>登录/注册</h1>
            <form className={style.logInForm} action="">
              <label htmlFor="userId">邮箱</label>
              <input type="text" id="userId" placeholder="输入Email邮箱地址" />
              <label htmlFor="password">密码</label>
              <input type="text" id="password" placeholder="输入密码" />
              <div>
                <button>注册新用户</button>
                <span>已有账户？</span>
                <button>登录</button>
              </div>
            </form>
            <div>-or-</div>
            <div>
              <img src={icon_1} alt="" />
              <img src={icon_2} alt="" />
              <img src={icon_3} alt="" />
            </div>
            <div>
              <input type="checkbox" />
              <span>
                同意并阅读《汇达移民网络服务使用协议》和《汇达移民用户隐私条款》
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LogInPage;
