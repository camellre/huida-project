import style from "./ImageContainer.module.scss";

interface ImageContainerProps {
  imageSource: string;
  imageAlt?: string;
}

function ImageContainer({
  imageSource,

  imageAlt = "",
}: ImageContainerProps) {
  return (
    <img className={style.imageWrapper} src={imageSource} alt={imageAlt} />
  );
}

export default ImageContainer;
