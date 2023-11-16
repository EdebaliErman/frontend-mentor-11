import './App.css';
import InfoText from './Components/InfoText/InfoText';
import Phone from './Components/Phone/Phone';
import SvgBack from './Components/SvgBack/SvgBack';

function App() {
  return (
    <div className="App">
      {/* <SvgBack/> */}
      <Phone/>
      <InfoText/>
    </div>
  );
}

export default App;
