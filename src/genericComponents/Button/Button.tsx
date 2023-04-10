import style from "./Button.module.scss";

interface ButtonProp {
  text: string;
  theme?: string;
}

export default function Button({ text, theme }: ButtonProp) {
  return <button className={[style.button, theme].join(" ")}>{text}</button>;
}
