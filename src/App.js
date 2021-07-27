import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import NewcastleForcast from './components/NewcastleForcast';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Map />
      <NewcastleForcast />
    </div>
  );
}

export default App;
