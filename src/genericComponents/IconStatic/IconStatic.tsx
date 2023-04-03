import style from "./IconStatic.module.scss";

interface IconProp {
  IconImage: string;
}

export default function IconStatic({ IconImage }: IconProp) {
  return (
    <span className={style.iconContainer}>
      <img className={style.icon} src={IconImage} />
    </span>
  );
}
