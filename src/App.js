import logo from './logo.svg';
import './App.css';
import Songs from './components/Songs'
import SongDetail from './components/SongDetail';

function App() {
  return (
    <div className="App">
      <Songs />
      <SongDetail />
    </div>
  );
}

export default App;
