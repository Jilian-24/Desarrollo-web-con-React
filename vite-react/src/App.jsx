import { Route, Routes } from 'react-router-dom';
import Principal from './Paginas/Principal';
import IniciarSesion from './Paginas/IniciarSesion';
import Registro from './Paginas/Registro';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/login" element={<IniciarSesion />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default App;