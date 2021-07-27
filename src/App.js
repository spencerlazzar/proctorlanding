import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import NewcastleForcast from './components/NewcastleForcast';

function App() {
  return (
    <div className='App'>
      <Header />
      <Map />
      <NewcastleForcast />
    </div>
  );
}

export default App;
