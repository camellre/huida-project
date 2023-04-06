import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import style from "./AccountPage.module.scss";
import IconStatic from "../../genericComponents/IconStatic/IconStatic";
import sideBarIcon_1 from "../../assets/settings.svg";
import Button from "../../genericComponents/Button/Button";

function AccountPage() {
  return (
    <>
      <NavBar />
      <div className={style.accountPageWrapper}>
        <aside className={style.accountPageSideBarWrapper}>
          <div className={style.sideBarTitleWrapper}>
            <span className={style.sideBarPhoto}>P</span>
            <div>
              <div>ID/名字</div>
              <div>账号管理</div>
            </div>
          </div>
          <div className={style.sideBarContentWrapper}>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_1} />
              <span>我的申请</span>
            </div>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_1} />
              <span>未提交申请</span>
            </div>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_1} />
              <span>已提交申请</span>
            </div>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_1} />
              <span>新建申请</span>
            </div>
            <div className={style.sideBarMenuItemWrapper}>
              <IconStatic IconImage={sideBarIcon_1} />
              <span>收信箱(5)</span>
            </div>
          </div>
          <Button theme="navBarButton" text="登出账号" />
        </aside>
        <div className={style.accountPageContentWrapper}>
          <h1>Content</h1>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AccountPage;
