import Button from "../../genericComponents/Button/Button";
import ImageWrapper from "../../genericComponents/ImageWrapper/ImageWrapper";
import style from "./EligibilityCheck.module.scss";
import image_1 from "../../assets/test_1.webp";
import image_2 from "../../assets/test_2.webp";
import image_3 from "../../assets/test_3.webp";
import image_4 from "../../assets/test_4.webp";
import image_5 from "../../assets/test_5.webp";

export const EligibilityCheck = () => {
  return (
    <article className={style.background}>
      <ImageWrapper
        imageSrc={image_1}
        imageStyle={style.imageAll}
        wrapperStyle={style.image_1}
      />
      <ImageWrapper
        imageSrc={image_2}
        imageStyle={style.imageAll}
        wrapperStyle={style.image_2}
      />
      <ImageWrapper
        imageSrc={image_3}
        imageStyle={style.imageAll}
        wrapperStyle={style.image_3}
      />
      <ImageWrapper
        imageSrc={image_4}
        imageStyle={style.imageAll}
        wrapperStyle={style.image_4}
      />
      <ImageWrapper
        imageSrc={image_5}
        imageStyle={style.imageAll}
        wrapperStyle={style.image_5}
      />
      <div className={style.contentWrapper}>
        <h2>最适合您的移民方案竟然是...?</h2>
        <Button text="马上点击测试" />
        <p>5分钟帮您匹配最合适的移民方案</p>
      </div>
    </article>
  );
};
