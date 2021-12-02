import './App.css';
import SearchShows from './components/Search';
import Trending from './pages/Trending';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
    <SearchShows />
    <Trending />
    </div>
  );
}

export default App;
