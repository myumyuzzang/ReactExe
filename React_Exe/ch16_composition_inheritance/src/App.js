import logo from './logo.svg';
import './App.css';
import WelcomeDialog from './ex01_comtainment/WelcomeDialog';
import WelcomeDesc from './ex01_comtainment/WelcomeDesc';
import SplitPane from './ex02_comtainment/SplitPane';
import AlramDialog from './ex03_specialization/AlarmDialog';
import ProfileCard from "./ex04_inheritance/ProfileCard";

function App() {
  return (
    // <div className='app'>
    //   <WelcomeDialog/>
    //   <hr />
    //   <WelcomeDesc/>
    //   <hr />
    //   <SplitPane left={<WelcomeDesc/>} right={<WelcomeDialog/>} />
    //   <hr />
    //   <AlramDialog/>
    // </div>
    <ProfileCard></ProfileCard>
  );
}

export default App;
