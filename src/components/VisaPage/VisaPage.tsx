import style from "./VisaPage.module.scss";
import visa_image_1 from "../../assets/visa_page_image_1.webp";

const VisaPage = () => {
  return (
    <main className={style.visaPageGrid}>
      <section>
        <h1>签证代办</h1>
        <p>便捷安全的签证代办服务</p>
      </section>
      <section>
        <img src={visa_image_1} alt="" className={style.visaPageImage_1} />
      </section>
    </main>
  );
};

export default VisaPage;
