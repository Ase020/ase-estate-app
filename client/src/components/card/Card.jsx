import { Link } from "react-router-dom";
import "./card.scss";

function Card({ property }) {
  return (
    <Link to={`/properties/${property.id}`} className="card">
      <div className="image-container">
        <img src={property.img} alt={property.title} />
      </div>

      <div className="description-container">
        <h2 className="title">{property.title}</h2>

        <div className="address">
          <img src="/pin.png" alt="pin" />
          <p>{property.address}</p>
        </div>

        <p className="price">$ {property.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="bed" />
              <span>{property.bedroom} bedrooms</span>
            </div>

            <div className="feature">
              <img src="/bath.png" alt="bathroom" />
              <span>{property.bathroom} bathrooms</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save" />
            </div>

            <div className="icon">
              <img src="/chat.png" alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
