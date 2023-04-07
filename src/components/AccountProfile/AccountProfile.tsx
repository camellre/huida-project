import style from "./AccountProfile.module.scss";
import Button from "../../genericComponents/Button/Button";

function AccountProfile() {
  return (
    <div className={style.accountProfileWrapper}>
      <h1>AccountProfile</h1>
      <div className={style.accountProfileItemWrapper}>
        <span>头像</span>
        <span>
          <img src="" alt="" />
        </span>
      </div>
      <div className={style.accountProfileItemWrapper}>
        <span>昵称</span>
        <span>ID号/名字</span>
        <span>
          <Button theme="navBarButton" text="修改" />
        </span>
      </div>
      <div className={style.accountProfileItemWrapper}>
        <span>密码</span>
        <span>************</span>
        <span>
          <Button theme="navBarButton" text="修改" />
        </span>
      </div>
      <div className={style.accountProfileItemWrapper}>
        <span>手机号</span>
        <span>+1510****8888</span>
        <span>
          <Button theme="navBarButton" text="修改" />
        </span>
      </div>
      <div className={style.accountProfileItemWrapper}>
        <span>Email</span>
        <span>huida*******.com</span>
        <span>
          <Button theme="navBarButton" text="修改" />
        </span>
      </div>
      <div className={style.accountProfileItemWrapper}>
        <span>
          <div>注销账号</div>
          <div>
            彻底删除不再使用本网站，一旦操作将无法恢复您的会员信息与作品内容，请谨慎操作！
          </div>
        </span>
        <span>
          <Button theme="navBarButton" text="注销账号" />
        </span>
      </div>
    </div>
  );
}

export default AccountProfile;
