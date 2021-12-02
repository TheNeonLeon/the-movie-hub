import './Header.css';
import logo from '../images/video-camera.png';

function App() {
  return (
    <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <h3 className="header-text">Welcome to the movie hub</h3>
        
    </div>
  );
}

export default App;
