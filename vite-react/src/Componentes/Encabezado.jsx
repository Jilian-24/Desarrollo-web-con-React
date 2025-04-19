import { Link } from 'react-router-dom';
import '../index.css';

function Encabezado() {
  return (
    <header className="encabezado">
      <h1 className="logo">COMPANY</h1>
      <nav>
        <Link to="#">Company</Link>
        <Link to="#">Our Class</Link>
        <Link to="#">Blog</Link>
        <Link to="#" className="activo">News</Link>
        <Link to="#">Contact</Link>
      </nav>
      <div className="acciones">
        <Link to="/login" className="boton">Login</Link>
        <Link to="/registro" className="boton">Registro</Link>
        <span className="telefono">999-456-009</span>
      </div>
    </header>
  );
}

export default Encabezado;