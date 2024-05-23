import logo from "./logo.svg";
import "./App.css";
// import ReactButton from "./ex01_non_styled/ReactButton";
// import StyledButton from "./ex02_styled/StyledButton";
// import SimpleButton from "./ex03_styled/SimpleButton";
// import SimpleButton from "./ex04_styled/SimpleButton";
// import LargeButton from "./ex05_styled/LargeButton";
// import PrimaryButton from "./ex06_styled/PrimaryButton";
// import PrimaryButton from "./ex07_styled/PrimaryButton";
// import PrimaryButton from "./ex08_styled/PrimaryButton";
// import SecondButton from "./ex09_styled/SecondButton";
// import Blocks from "./ex10_styled/Blocks";
// import Blocks from "./ex11_styled/Blocks";
import Blocks from "./ex12_styled/Blocks";

const blockItems = [
  {
    label: "1",
    padding: "1rem",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/bhWZTq/btrr1MBYWuc/Ct0TpC5iAi8pOV6CkkFZeK/img.jpg")`,
  },
  {
    label: "2",
    padding: "1rem",
    backgroundImage: `url("https://media.istockphoto.com/id/586714878/ko/%EC%82%AC%EC%A7%84/%EA%B7%80%EC%97%AC%EC%9A%B4-%EC%95%84%EA%B8%B0-%EC%83%88%EB%81%BC-%EB%8F%BC%EC%A7%80.jpg?s=1024x1024&w=is&k=20&c=CDWOMEY5oLe5sFBUgJ2ykGVkIYQVJZ2BfLLZcfwWiI8=")`,
  },
  {
    label: "3",
    padding: "1rem",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/T5llE/btrr03jHwO8/LYZz4fzSmJcqOEQxJTjTbk/img.jpg")`,
  },
    {
    label: "1",
    padding: "1rem",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/bhWZTq/btrr1MBYWuc/Ct0TpC5iAi8pOV6CkkFZeK/img.jpg")`,
  },
  {
    label: "2",
    padding: "1rem",
    backgroundImage: `url("https://media.istockphoto.com/id/586714878/ko/%EC%82%AC%EC%A7%84/%EA%B7%80%EC%97%AC%EC%9A%B4-%EC%95%84%EA%B8%B0-%EC%83%88%EB%81%BC-%EB%8F%BC%EC%A7%80.jpg?s=1024x1024&w=is&k=20&c=CDWOMEY5oLe5sFBUgJ2ykGVkIYQVJZ2BfLLZcfwWiI8=")`,
  },
  {
    label: "3",
    padding: "1rem",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/T5llE/btrr03jHwO8/LYZz4fzSmJcqOEQxJTjTbk/img.jpg")`,
  },
    {
    label: "1",
    padding: "1rem",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/bhWZTq/btrr1MBYWuc/Ct0TpC5iAi8pOV6CkkFZeK/img.jpg")`,
  },
  {
    label: "2",
    padding: "1rem",
    backgroundImage: `url("https://media.istockphoto.com/id/586714878/ko/%EC%82%AC%EC%A7%84/%EA%B7%80%EC%97%AC%EC%9A%B4-%EC%95%84%EA%B8%B0-%EC%83%88%EB%81%BC-%EB%8F%BC%EC%A7%80.jpg?s=1024x1024&w=is&k=20&c=CDWOMEY5oLe5sFBUgJ2ykGVkIYQVJZ2BfLLZcfwWiI8=")`,
  },
  {
    label: "3",
    padding: "1rem",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/T5llE/btrr03jHwO8/LYZz4fzSmJcqOEQxJTjTbk/img.jpg")`,
  },
    {
    label: "1",
    padding: "1rem",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/bhWZTq/btrr1MBYWuc/Ct0TpC5iAi8pOV6CkkFZeK/img.jpg")`,
  },
  {
    label: "2",
    padding: "1rem",
    backgroundImage: `url("https://media.istockphoto.com/id/586714878/ko/%EC%82%AC%EC%A7%84/%EA%B7%80%EC%97%AC%EC%9A%B4-%EC%95%84%EA%B8%B0-%EC%83%88%EB%81%BC-%EB%8F%BC%EC%A7%80.jpg?s=1024x1024&w=is&k=20&c=CDWOMEY5oLe5sFBUgJ2ykGVkIYQVJZ2BfLLZcfwWiI8=")`,
  },
  {
    label: "3",
    padding: "1rem",
    backgroundImage: `url("https://blog.kakaocdn.net/dn/T5llE/btrr03jHwO8/LYZz4fzSmJcqOEQxJTjTbk/img.jpg")`,
  },
];

function App() {
  return (
    <>
      {/* <ReactButton>안녕하세요</ReactButton>
      <StyledButton>감사합니다</StyledButton>
      <SimpleButton>행복합니다</SimpleButton>
      <LargeButton>존경합니다</LargeButton>
      <PrimaryButton>사랑합니다</PrimaryButton>
      <PrimaryButton primary>즐겁습니다</PrimaryButton>
      <SecondButton>Happy Happy</SecondButton>
      <SecondButton primary>Congraturation!</SecondButton> */}
      {/* <Blocks />
      <Blocks column />
      <Blocks stretch />
      <Blocks baseline /> */}

      <Blocks blockItems={blockItems} />
    </>
  );
}

export default App;