import { Link, Outlet } from "react-router-dom";
import style from "./AccountPage.module.scss";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { UserIcon } from "../../genericComponents/UserIcon/UserIcon";
import { FilePlusIcon } from "../../genericComponents/FilePlusIcon/FilePlusIcon";
import { FolderIcon } from "../../genericComponents/FolderIcon/FolderIcon";
import { FileExclamationIcon } from "../../genericComponents/FileExclamationIcon/FileExclamationIcon";
import { FileCheckIcon } from "../../genericComponents/FileCheckIcon/FileCheckIcon";
import { InboxIcon } from "../../genericComponents/InboxIcon/InboxIcon";
import Button from "../../genericComponents/Button/Button";

function AccountPage() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className={style.accountBodyWrapper}>
        <article className={style.sideBar}>
          <div className={style.accountProfileBoxWrapper}>
            <UserIcon userIconStyle={style.userIcon} />
            <div>
              <p>ID号/名字</p>
              <Link to={"/account/profile"}>
                <p>账号管理</p>
              </Link>
            </div>
          </div>
          <ul className={style.sideBarMenuWrapper}>
            <li className={style.sideBarMenuItem}>
              <FolderIcon folderIconStyle={style.sideBarMenuIcon} />
              <p>我的申请</p>
            </li>
            <li className={style.sideBarMenuItem}>
              <FileExclamationIcon
                fileExclamationIconStyle={style.sideBarMenuIcon}
              />
              <p>未交申请</p>
            </li>
            <li className={style.sideBarMenuItem}>
              <FileCheckIcon fileCheckIconStyle={style.sideBarMenuIcon} />
              <p>已交申请</p>
            </li>
            <li className={style.sideBarMenuItem}>
              <FilePlusIcon filePlusIconStyle={style.sideBarMenuIcon} />
              <p>新建申请</p>
            </li>
            <li className={style.sideBarMenuItem}>
              <InboxIcon inboxIconStyle={style.sideBarMenuIcon} />
              <p>收信箱</p>
            </li>
          </ul>
          <Button text="登出账号" theme={style.logOutButton} />
        </article>
        <article className={style.accountBody}>
          <Outlet />
        </article>
      </main>
    </>
  );
}

export default AccountPage;
