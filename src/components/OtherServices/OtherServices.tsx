import style from "./OtherServices.module.scss";
import otherServices_image_1 from "../../assets/otherservice_image_1.webp";

const OtherServices = () => {
  return (
    <main className={style.otherServicesPageGrid}>
      <section>
        <h1>其他服务</h1>
        <p>便捷高效的在线服务</p>
      </section>
      <section>
        <img
          src={otherServices_image_1}
          alt=""
          className={style.otherServicesPageImage_1}
        />
      </section>
    </main>
  );
};

export default OtherServices;
