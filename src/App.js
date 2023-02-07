import './App.css';
import freecodecamplogo from './imagenes/FreeCodeCamp_logo.svg';
import ListaDeTareas from './componentes/ListaDeTareas.jsx'

function App() {
  return (
    <div className="App-tareas">
        <div className='freecodecamp-logo-contenedor'>
          <img src={freecodecamplogo} alt="FreeCodeCamp"
               className='freecodecamp-logo'/>
        </div>
        <div className='tareas-lista-principal'>
          <h1 className='tituloh1'>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
    </div>
  );
}

export default App;
