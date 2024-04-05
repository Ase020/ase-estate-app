import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ property }) {
  return (
    <Marker position={[property.latitude, property.longitude]}>
      <Popup>
        <div className="popup-container">
          <img src={property.img} alt={property.title} />

          <div className="desc-container">
            <Link to={`/properties/${property.id}`}>{property.title}</Link>

            <span>{property.bedroom} bedrooms</span>

            <b>$ {property.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
