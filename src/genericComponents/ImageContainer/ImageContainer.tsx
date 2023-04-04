import React from "react";
import style from "./ImageContainer.module.scss";

interface ImageContainerProps {
  imageSource: string;
  imageMaxWidth?: React.CSSProperties;
  imageAlt?: string;
}

function ImageContainer({
  imageSource,
  imageMaxWidth,
  imageAlt = "",
}: ImageContainerProps) {
  return (
    <img
      className={style.imageWrapper}
      style={imageMaxWidth}
      src={imageSource}
      alt={imageAlt}
    />
  );
}

export default ImageContainer;
