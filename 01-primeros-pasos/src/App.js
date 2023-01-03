import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { CuartoComponente } from './CuartoComponente';

function App() {

  const ficha_medica = {
    altura: "190cm",
    grupo: "A+"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='componentes'>
          <hr/>
          <CuartoComponente/>
          <hr/>
          <TercerComponente 
            ficha={ficha_medica}/>
          <hr/>
          <SegundoComponente/>
          <hr/>
          <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
