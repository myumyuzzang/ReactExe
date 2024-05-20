import logo from "./logo.svg";
import "./App.css";
// import ValidationSample from "./ex02_validation/ValidationSample";
// import ValidationSample from "./ex03_validation_ref/ValidationSample";
// import ValidationSample from "./ex04_validation_createref/ValidationSample";
import React, { Component } from 'react';
import ScrollBox from "./ex05_component_ref/ScrollBox";


// function App() {
//   return <ValidationSample/>;
// }
 

/* ref는 html 엘리먼트를 가리킬 때 사용하고,
  우리가 만든 컴포넌트를 가리킬 때도 사용한다.
*/
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;