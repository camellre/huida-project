import React, { ReactNode } from "react";
import style from "./Card.module.scss";

interface CardProps {
  childrenTop: React.ReactNode;
  childrenBottom: React.ReactNode;
}

function Card({ childrenTop, childrenBottom }: CardProps) {
  return (
    <div className={style.cardContainer}>
      {childrenTop}
      {childrenBottom}
    </div>
  );
}

export default Card;
