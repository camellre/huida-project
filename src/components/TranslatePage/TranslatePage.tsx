import style from "./TranslatePage.module.scss";
import translate_image_1 from "../../assets/translate_image_1.webp";

const TranslatePage = () => {
  return (
    <main className={style.translatePageGrid}>
      <section>
        <h1>文件翻译</h1>
        <p>准确高效的文件翻译服务</p>
      </section>
      <section>
        <img
          src={translate_image_1}
          alt=""
          className={style.translatePageImage_1}
        />
      </section>
    </main>
  );
};

export default TranslatePage;
