import { Link, Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import style from "./AccountPage.module.scss";
import IconStatic from "../../genericComponents/IconStatic/IconStatic";
import sideBarIcon_1 from "../../assets/my_application_icon.svg";
import sideBarIcon_2 from "../../assets/unfinished_application_icon.svg";
import sideBarIcon_3 from "../../assets/submitted_application_icon.svg";
import sideBarIcon_4 from "../../assets/new_application_icon.svg";
import sideBarIcon_5 from "../../assets/inbox_icon.svg";
import Button from "../../genericComponents/Button/Button";
import MyApplicationIcon from "../../components/MyApplicationIcon/MyApplicationIcon";

function AccountPage() {
  return (
    <>
      <NavBar />
      <div className={style.accountPageWrapper}>
        <aside className={style.accountPageSideBarWrapper}>
          <div className={style.sideBarTitleWrapper}>
            <span className={style.sideBarPhoto}>P</span>
            <div>
              <div>用户名/名字</div>
              <Link to={"/account/profile"}>账号管理 </Link>
            </div>
          </div>
          <div className={style.sideBarContentWrapper}>
            <div className={style.sideBarMenuItemWrapper}>
              <MyApplicationIcon />
              <span>我的申请</span>
            </div>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_2} />
              <span>未提交申请</span>
            </div>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_3} />
              <span>已提交申请</span>
            </div>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_4} />
              <span>新建申请</span>
            </div>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_5} />
              <span>收信箱(5)</span>
            </div>
          </div>
          <Button theme="navBarButton" text="登出账号" />
        </aside>
        <div className={style.accountPageContentWrapper}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AccountPage;
