import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.webp';

function ImagenesTres() {
  return (
    <section className="imagenes-tres">
      <div>
        <h4>DOLOR FIT BOR</h4>
        <img src={img1} alt="img1" />
        <p>Texto breve aquí.</p>
      </div>
      <div>
        <h4>PERMOS DOLOROS</h4>
        <img src={img2} alt="img2" />
        <p>Otro texto aquí.</p>
      </div>
      <div>
        <h4>GOREMINOT BIRJU</h4>
        <img src={img3} alt="img3" />
        <p>Texto final aquí.</p>
      </div>
    </section>
  );
}

export default ImagenesTres;