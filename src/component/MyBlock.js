import style from "../style/yourStryle.module.css";

export function MyBlock() {
  return (
    <div>
      <h1 className={`${style.error} ${style.special} ${style.coffee}`}>
        Lorem ipsum dolor sit amet.
      </h1>
      <h1 className={[style.coffee, style.coffee, style.error].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
