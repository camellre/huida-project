import { Link, Outlet } from "react-router-dom";
import style from "./AccountPage.module.scss";
import { UserIcon } from "../../genericComponents/UserIcon/UserIcon";
import { FilePlusIcon } from "../../genericComponents/FilePlusIcon/FilePlusIcon";
import { FolderIcon } from "../../genericComponents/FolderIcon/FolderIcon";
import { FileExclamationIcon } from "../../genericComponents/FileExclamationIcon/FileExclamationIcon";
import { FileCheckIcon } from "../../genericComponents/FileCheckIcon/FileCheckIcon";
import { InboxIcon } from "../../genericComponents/InboxIcon/InboxIcon";
import Button from "../../genericComponents/Button/Button";
import { LeftIcon } from "../../genericComponents/LeftIcon/LeftIcon";
import { useState } from "react";

function AccountPage() {
  const [sideBarExtend, setSiderBarExtend] = useState(true);

  const handleSideBarTogglerClick = () => {
    if (sideBarExtend) return setSiderBarExtend(false);
    return setSiderBarExtend(true);
  };
  return (
    <main className={style.accountBodyWrapper}>
      <article
        className={
          sideBarExtend
            ? style.sideBar
            : [style.sideBar, style.sideBarShrink].join(" ")
        }
      >
        <LeftIcon
          handleClick={handleSideBarTogglerClick}
          leftIconStyle={
            sideBarExtend
              ? style.sideBarToggler
              : [style.sideBarToggler, style.transformedToggler].join(" ")
          }
        />
        <div className={style.accountProfileBoxWrapper}>
          <UserIcon userIconStyle={style.userIcon} />
          <div>
            <p className={sideBarExtend ? " " : style.sideBarShrinkText}>
              ID号/名字
            </p>
            <Link to={"/account/profile"}>
              <p>账号管理</p>
            </Link>
          </div>
        </div>
        <ul className={style.sideBarMenuWrapper}>
          <li className={style.sideBarMenuItem}>
            <FolderIcon folderIconStyle={style.sideBarMenuIcon} />
            <p className={sideBarExtend ? " " : style.sideBarShrinkText}>
              我的申请
            </p>
          </li>
          <li className={style.sideBarMenuItem}>
            <FileExclamationIcon
              fileExclamationIconStyle={style.sideBarMenuIcon}
            />
            <p className={sideBarExtend ? " " : style.sideBarShrinkText}>
              未交申请
            </p>
          </li>
          <li className={style.sideBarMenuItem}>
            <FileCheckIcon fileCheckIconStyle={style.sideBarMenuIcon} />
            <p className={sideBarExtend ? " " : style.sideBarShrinkText}>
              已交申请
            </p>
          </li>
          <li className={style.sideBarMenuItem}>
            <FilePlusIcon filePlusIconStyle={style.sideBarMenuIcon} />
            <p className={sideBarExtend ? " " : style.sideBarShrinkText}>
              新建申请
            </p>
          </li>
          <li className={style.sideBarMenuItem}>
            <InboxIcon inboxIconStyle={style.sideBarMenuIcon} />
            <p className={sideBarExtend ? " " : style.sideBarShrinkText}>
              收信箱
            </p>
          </li>
        </ul>
        <Button to=" " text="登出账号" theme={style.logOutButton} />
      </article>
      <article className={style.accountBody}>
        <Outlet />
      </article>
    </main>
  );
}

export default AccountPage;
