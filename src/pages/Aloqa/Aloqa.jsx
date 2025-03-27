import "./Aloqa.css";

const Aloqa = () => {
  return (
    <div className="aloqa-container">
      <h1>Biz bilan bog'lanish</h1>

      <div className="content-wrapper">
        <div className="contact-info">
          <p>
            <strong>Manzil:</strong> 4A Muninov ko'chasi, Mirzo Ulugbek tumani,
            Toshkent, 100084
          </p>
          <p>
            <strong>Telefon:</strong> +998 78 113 62 72
          </p>
          <p>
            <strong>Email:</strong> info@mohirdev.uz
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="Mohirdev manzili"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.798509373028!2d69.28073431542425!3d41.31538297927059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d6e5a7e1c1!2sMohirdev!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Aloqa;
