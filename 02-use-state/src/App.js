import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { Ejercicio } from './components/Ejercicio';

function App() {

  const date = new Date();
  let y = date.getFullYear();

  //console.log(year);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en Reac - Hook UseState</h1>

        {/* <MiPrimerEstado/> */}
        <Ejercicio year={y}/>
      </header>
    </div>
  );
}

export default App;
