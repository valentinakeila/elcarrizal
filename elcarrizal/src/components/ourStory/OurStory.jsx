import logo from "./elcarrizal.jpg";

function OurStory() {
  const title = "EL CARRIZAL";
  const description =
    "Se dedica a la compra y venta de frutos secos de alta calidad, ideales para una vida saludable. Nuestro compromiso es ofrecer productos frescos y nutritivos que complementen tu dieta y te ayuden a mantener un estilo de vida equilibrado. Desde almendras crujientes hasta nueces energizantes, cada producto es seleccionado con cuidado para garantizar su pureza y sabor. Al suscribirte a nuestra página web, recibirás asesoría nutricional personalizada para implementar frutos secos en tu dieta y mejorar tu bienestar. ¡Descubre cómo nuestros frutos secos pueden transformar tu salud y tu vida!";

  return (
    <div
      className="d-flex justify-content-center gap-4 p-4 align-items-center"
      style={{ height: "70vh", width: "100%", backgroundColor: "#E8E3DD" }}
    >
      <div
        className="rounded-circle overflow-hidden"
        style={{ width: "500px", height: "500px", position: "relative" }}
      >
        <img
          src={logo}
          alt="Duffee Logo"
          style={{ objectFit: "cover", borderRadius: "50%", width: "100%", height: "100%" }}
        />
      </div>

      <div className="col-md-7 d-flex flex-column gap-5">
        <h2 className="featurette-heading fw-normal lh-1 display-1">
          {title}
        </h2>
        <p className="lead fs-3">{description}</p>
      </div>
    </div>
  );
}

export default OurStory;
