import { Slider } from "../../components";
import { propertyData, userData } from "../../lib";
import "./property.scss";

function Property() {
  return (
    <div className="property">
      <div className="details">
        <div className="details-wrapper">
          <Slider images={propertyData.images} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{propertyData.title}</h1>

                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{propertyData.address}</span>
                </div>

                <span className="price">$ {propertyData.price}</span>
              </div>

              <div className="user">
                <img src={userData.img} alt={userData.name} />
                <span>{userData.name}</span>
              </div>
            </div>

            <p className="bottom">{propertyData.description}</p>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="features-wrapper">features wrapper</div>
      </div>
    </div>
  );
}

export default Property;
