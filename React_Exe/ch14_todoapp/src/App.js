import logo from './logo.svg';
import './App.css';
// import TodoTemplate from './ex01_TodoTemplate/TodoTemplate';
import TodoTemplate from './ex02_TodoInsert/TodoTemplate';
import TodoInsert from './ex02_TodoInsert/TodoInsert';


function App() {
  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
    </TodoTemplate>
    );
  
}

export default App;
