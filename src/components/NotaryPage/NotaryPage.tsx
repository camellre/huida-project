import style from "./NotaryPage.module.scss";
import notary_image_1 from "../../assets/notary_page_1.webp";

const NotaryPage = () => {
  return (
    <main className={style.notaryPageGrid}>
      <section>
        <h1>加州公证服务</h1>
        <p>诚信可靠的加州公证服务</p>
      </section>
      <section>
        <img src={notary_image_1} alt="" className={style.notaryPageImage_1} />
      </section>
    </main>
  );
};

export default NotaryPage;
