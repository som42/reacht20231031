import mycss from "../style/style1.module.css";
// 클래스로 style 주기
// 외부 css 파일 이니깐 import 해서 써야 한다
export function MyBox() {
  return (
    <div>
      <h1 className={mycss.boxClass}>Lorem ipsum dolor.</h1>
    </div>
  );
}