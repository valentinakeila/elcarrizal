import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from "./castanas_de_caju.jpg";
import carousel2 from "./nueces.jpg";
import carousel3 from "./mani.jpg";
import duffeelogo from './logo.png';


const imageStyle = {
  maxHeight: '80vh',
  objectFit: 'cover',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
};

const captionStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
};

const paragraphStyle = {
  fontSize: '4em',
  marginBottom: '20px',
  fontStyle: 'italic',
};

const duffeeStyle = {
  height: '300px',
  transform: 'translate(-51%, -65%)', 
  position: 'absolute',
  top: '50%',
  left: '50%',
};

const buttonStyle = {
  fontSize: '1.5em',
  padding: '10px 150px',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: '#fcbb79',
  color: 'black',
};

const blackStripStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
  width: '100%',
};

const blackStripParagraphStyle = {
  margin: 0,
  fontSize: '1.5em',
};

function AppCarousel() {
  //const navigate = useNavigate();
  
  return (
    <>
      <Carousel interval={2000} pause={false} controls={false} indicators={false}>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
              style={imageStyle}
            />
            <div style={overlayStyle}></div>
            <Carousel.Caption style={captionStyle}>
              <img src={duffeelogo} alt="Duffee Logo" style={duffeeStyle} />
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="Second slide"
              style={imageStyle}
            />
            <div style={overlayStyle}></div>
            <Carousel.Caption style={captionStyle}>
              <p style={paragraphStyle}>Consulta Nutricional:</p>
              <button style={buttonStyle} >
                Suscripción
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Third slide"
              style={imageStyle}
            />
            <div style={overlayStyle}></div>
            <Carousel.Caption style={captionStyle}>
              <p style={paragraphStyle}>Nuestro Catálogo:</p>
              <button style={buttonStyle}>
                Catálogo
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      <div style={blackStripStyle}>
        <p style={blackStripParagraphStyle}>
          ¡Descubre la mejor selección de frutos secos en El Carrizal! Visítanos hoy y vive una experiencia única.
        </p>
      </div>
    </>
  );
}

export default AppCarousel;
