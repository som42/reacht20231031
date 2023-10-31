

function App() {
    return (
        <div>
            <h1>hello react</h1>
            <h2>HI REACT</h2>
            <MyComp/>
        </div>
    );
}
    // 복잡한 component 따로 해야 간결하게 보인다.
    // 브라우저가 기본으로 제공 해주는 태그(built-in) 소문자로 시작
    // 우리가 만드는 컴포넌트(함수) 는 꼭 대 문자로 시작 해야 한다.
    // return 문을 가져야 한다.
    // return 값은 보통 JSX 코드 ( 꼭 그런건 아니다 )
function MyComp() {
    // return 에 jsx 코드 작성 가능
    // 꼭 하나의 root tag가 존재해야 함.
    // return 값이 여러 줄이면 ()로 감싸기 ( 별 이유 없으면 항상 감싸기)
    // root tag가 필요없다면 fragment 사용 가능

    //jsx주석 사용법
    //{/*  */}
    return (
        <>
            {/* frament는 <></> */}
            <h1>HI COMPONENT</h1>
            <h2>hello</h2>
        </>
    )
}

export default App;
