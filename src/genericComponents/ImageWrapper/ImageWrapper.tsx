import style from "./ImageWrapper.module.scss";

interface IconProp {
  imageSrc: string;
  imageStyle?: string;
  imageAlt?: string;
  wrapperStyle?: string;
}

export default function ImageWrapper({
  imageSrc,
  imageStyle,
  imageAlt,
  wrapperStyle,
}: IconProp) {
  return (
    <figure className={[style.imageWrapper, wrapperStyle].join(" ")}>
      <img className={imageStyle} src={imageSrc} alt={imageAlt} />
    </figure>
  );
}
