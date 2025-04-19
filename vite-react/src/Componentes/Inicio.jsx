import videoDemo from '../assets/video.mp4';

function Inicio() {
  return (
    <section className="inicio">
      <div className="texto">
        <h2>Landing Page Template</h2>
        <h3>LOREIPSUM TITLE</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button className="boton">Next</button>
      </div>
      <div className="video">
        <video controls src={videoDemo} width="100%"></video>
      </div>
    </section>
  );
}

export default Inicio;