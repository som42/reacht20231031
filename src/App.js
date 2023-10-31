

function App() {
  return (
    <div>
      <MyComponent1 />
      {/*
      <div>
       <h1> hello Component</h1>
       <div/>
      */}
      <MyComponent2 />
    {/*
      <p> lorem ipsum alkdjf alkdjf </p>
      <ul>
        <li>lorem</li>
        <li>ipsum</li>
        <li>dolor</li>
      </ul>
    */}
    </div>
  );
}

function MyComponent1 (){
  return (
    <div>
      <h1>hello Component</h1>
    </div>
      )
}

function MyComponent2 () {
  return (
      <>
        <p>lorem ipsum alkdjf alkdjf</p>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dalor</li>
        </ul>
      </>
  );
}

export default App;
