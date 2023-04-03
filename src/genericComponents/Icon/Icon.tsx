import style from "./Icon.module.scss";

interface IconProp {
  IconImage: string;
}

export default function Icon({ IconImage }: IconProp) {
  return (
    <span className={style.iconContainer}>
      <img className={style.icon} src={IconImage} />
    </span>
  );
}
