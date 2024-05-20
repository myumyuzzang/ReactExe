import { Component } from "react";

class EventPractice extends Component {

  state = {
    username: '',
    message: ''
  }
 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
 
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  // 각각 어느 input에서 호출되었느냐에 따라서
  // 아래처럼
  // username : 변화값
  // 이거나 
  // message : 변화값
  // 으로 설정되므로, 원하는 state변수에 값이 저장되게 된다

  // 1개의 함수로 여러 개의 요소의 이벤트를 처리
  // 단, state변수 이름과, 요소의 name을 동일하게 해야한다.

  render() {
     return (
      <div>
        <h1>이벤트 연습</h1>
        {/* username과 message의 변화값 모두 this.handleChange에 전달됨 */}
          <input
          type="text" name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text" name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
         <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;