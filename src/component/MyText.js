import st from "../style/error.module.css";
export function MyText() {
  return (
    <div>
      {/*red 배경색, white 폰 글자색*/}
      <h1 className={st.error}>Lorem ipsum dolor sit amet.</h1>
    </div>
  );
}
