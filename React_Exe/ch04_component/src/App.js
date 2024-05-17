import logo from './logo.svg';
import './App.css';

// import Child from './ex01_function/Child'
// import Child from './ex02_class/Child'
// import MyComonent from './ex03_props/MyComponent';
// import Library from './ex04_props/Library';
// import MyComonent from './ex05_props/MyComponent';
// import MyComonent from './ex05_default_props/MyComponent';
// import MyComponent from './ex07_children/MyComponent';
// import MyComponent from './ex08_destructing/MyComponent';
// import MyComponent from './ex09_prop_types/MyComponent';
// import MyComponent from './ex10_prop_required/MyComponent';
import MyComponent from './ex11_prop_class/MyComponent';

function App() {
  return (

    // <Library title="조선 선비들의" />

    // <>
    //   <MyComonent />
    //   <MyComonent name="리액트" />
    // </>

    // <MyComponent name="Happy Happy">리액트 프로그래밍</MyComponent>

    // <MyComponent name="행운">리액트</MyComponent>
    // <MyComponent name={3}>리액트</MyComponent>

    <MyComponent name="React_Programming" favoriteNumber={1}>리액트</MyComponent>
  );
}

export default App;
