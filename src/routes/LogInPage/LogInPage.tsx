import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Icon from "../../genericComponents/Icon/Icon";
import style from "./LogInPage.module.scss";
import icon_1 from "../../assets/user.svg";

function LogInPage() {
  return (
    <>
      <NavBar />
      <div className={style.logInPageWrapper}>
        <div className={style.logInBoxWrapper}>
          <div>
            <h1>汇达移民</h1>
            <img src="" alt="" />
          </div>
          <div className={style.logInSubBoxWrapper}>
            <div>
              <h1>登录/注册</h1>
            </div>
            <form className={style.logInFormWrapper} action="">
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
              <Icon IconImage={icon_1} />
              <Icon IconImage={icon_1} />
              <Icon IconImage={icon_1} />
            </div>
            <div>
              <input type="checkbox" />
              <span>
                同意并阅读《汇达移民网络服务使用协议》和《汇达移民用户隐私条款》
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LogInPage;
