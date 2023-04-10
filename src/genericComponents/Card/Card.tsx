import { ReactNode } from "react";
import style from "./Card.module.scss";

interface CardProps {
  childrenTop: ReactNode;
  childrenBottom: ReactNode;
  cardStyle?: string;
}

function Card({ childrenTop, childrenBottom, cardStyle }: CardProps) {
  return (
    <article className={[style.cardContainer, cardStyle].join(" ")}>
      {childrenTop}
      {childrenBottom}
    </article>
  );
}

export default Card;
