import { Map, Slider } from "../../components";
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
        <div className="features-wrapper">
          <p className="title">General</p>
          <div className="vertical-render">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="feature-title">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>

            <div className="feature">
              <img src="/pet.png" alt="pet" />
              <div className="feature-title">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>

            <div className="feature">
              <img src="/fee.png" alt="fee" />
              <div className="feature-title">
                <span>Property Fees</span>
                <p>Must have 3X the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="size" />
              <span>80sqft</span>
            </div>

            <div className="size">
              <img src="/bed.png" alt="bed" />
              <span>2 beds</span>
            </div>

            <div className="size">
              <img src="/bath.png" alt="bath" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="horizontal-render">
            <div className="feature">
              <img src="/school.png" alt="school" />
              <div className="feature-title">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/bus.png" alt="bus" />
              <div className="feature-title">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/restaurant.png" alt="restaurant" />
              <div className="feature-title">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="map-container">
            <Map properties={[propertyData]} />
          </div>

          <div className="btn-container">
            <button type="button">
              <img src="/chat.png" alt="chat" />
              <span>Send a Message</span>
            </button>

            <button type="button">
              <img src="/save.png" alt="save" />
              <span>Save the Place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
