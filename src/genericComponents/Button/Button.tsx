import { Link } from "react-router-dom";
import style from "./Button.module.scss";

interface ButtonProp {
  text: string;
  to: string;
  theme?: string;
}

export default function Button({ text, to, theme }: ButtonProp) {
  return (
    <Link to={to} className={[style.button, theme].join(" ")}>
      {text}
    </Link>
  );
}
