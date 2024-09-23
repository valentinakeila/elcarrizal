
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={linksStyle}>
          <p style={textStyle}>
            <i className="fas fa-envelope"></i> Elcarrizal@gmail.com
          </p>
          <p style={textStyle}>
            <i className="fab fa-instagram"></i> Instagram @Elcarrizal
          </p>
          <p style={textStyle}>
            <i className="fab fa-tiktok"></i> TikTok @Elcarrizal
          </p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '40px 0', // Aumentar el padding vertical
  position: 'relative',
  bottom: '0',
  width: '100%',
  fontSize: '1.5em', // Aumentar el tamaño de fuente
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const linksStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '35px', // Espacio entre los enlaces
};

const textStyle = {
  margin: '5px 0',
};

export default Footer;
