import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import MainText from './Components/MainText';
import MainPageContent from './Components/MainPageContent';

function App() {
  return (
    <div className='body'>
    <Nav/>
    <MainText/>
    <MainPageContent/>
    </div>
  );
}

export default App;
