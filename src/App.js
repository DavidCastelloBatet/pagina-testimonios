import './App.css';
import Testimonio from './components/Testimonio';
import data from './data/data';

function App() {
  return (
    <div className="App">
      <Testimonio testimonios={data} />
    </div>
  );
}

export default App;
