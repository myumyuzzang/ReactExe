import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// import SassComponent from './ex01_sass/SassComponent';
// import SassComponent from './ex02_sass/SassComponent';
// import CSSModule from './ex03_css_module/CSSModule';
// import CSSModule from './ex04_css_module/CSSModule';
import MyComponent from './ex05_classnames/MyComponent';
import CSSModule from './ex05_classnames/CSSModule';


class App extends Component {
  render(){
    return (
      <div>
        {/* <SassComponent/> */}
        {/* <CSSModule/> */}
        <MyComponent/>
        <CSSModule/>
      </div>
    )
  }

}

export default App;
