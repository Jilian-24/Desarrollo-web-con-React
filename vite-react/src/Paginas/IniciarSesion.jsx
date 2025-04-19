import { useNavigate } from 'react-router-dom';

function IniciarSesion() {
  const navigate = useNavigate();

  const manejarInicioSesion = (e) => {
    e.preventDefault();
    navigate('/principal');
  };

  return (
    <div className="contenedor-formulario">
      <button className="btn-regresar" onClick={() => navigate('/')}>← Regresar</button>
      <form className="formulario" onSubmit={manejarInicioSesion}>
        <h2>Iniciar Sesión</h2>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button className="boton" type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default IniciarSesion;