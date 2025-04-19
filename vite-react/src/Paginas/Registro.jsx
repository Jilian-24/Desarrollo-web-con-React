import { useNavigate } from 'react-router-dom';

function Registro() {
  const navigate = useNavigate();

  const manejarRegistro = (e) => {
    e.preventDefault();
    navigate('/principal');
  };

  return (
    <div className="contenedor-formulario">
      <button className="btn-regresar" onClick={() => navigate('/')}>← Regresar</button>
      <form className="formulario" onSubmit={manejarRegistro}>
        <h2>Registro de Usuario</h2>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button className="boton" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;