import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { Map, Slider } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

import "./property.scss";

function Property() {
  const property = useLoaderData();
  const [saved, setSaved] = useState(property.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const savePlace = async () => {
    if (!currentUser) {
      navigate("/login");
    }

    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", {
        postId: property.id,
      });
    } catch (error) {
      setSaved((prev) => !prev);
      console.log("Error: ", error);
    }
  };
  return (
    <div className="property">
      <div className="details">
        <div className="details-wrapper">
          <Slider images={property.images} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{property.title}</h1>

                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{property.address}</span>
                </div>

                <span className="price">$ {property.price}</span>
              </div>

              <div className="user">
                <img
                  src={property.user.avatar || "/noavatar.jpg"}
                  alt={property.user.username}
                />
                <span>{property.user.username}</span>
              </div>
            </div>

            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(property.postDetail.description),
              }}
            />
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
                {property.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="/pet.png" alt="pet" />
              <div className="feature-title">
                <span>Pet Policy</span>
                {property.postDetail.petPolicy === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="/fee.png" alt="fee" />
              <div className="feature-title">
                <span>Income Policy</span>
                <p>{property.postDetail.income}</p>
              </div>
            </div>
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="size" />
              <span>{property.postDetail.size} sqft</span>
            </div>

            <div className="size">
              <img src="/bed.png" alt="bed" />
              <span>
                {property.bedroom} {property.bedroom === 1 ? "bed" : "beds"}
              </span>
            </div>

            <div className="size">
              <img src="/bath.png" alt="bath" />
              <span>
                {property.bathroom}{" "}
                {property.bathroom === 1 ? "bathroom" : "bathrooms"}
              </span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="horizontal-render">
            <div className="feature">
              <img src="/school.png" alt="school" />
              <div className="feature-title">
                <span>School</span>
                <p>
                  {property.postDetail.school < 1000
                    ? property.postDetail.school + "m"
                    : property.postDetail.school / 1000 + "km"}{" "}
                  away
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="/bus.png" alt="bus" />
              <div className="feature-title">
                <span>Bus Stop</span>
                <p>
                  {property.postDetail.bus < 1000
                    ? property.postDetail.bus + "m"
                    : property.postDetail.bus / 1000 + "km"}{" "}
                  away
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="/restaurant.png" alt="restaurant" />
              <div className="feature-title">
                <span>Restaurant</span>
                <p>
                  {property.postDetail.restaurant < 1000
                    ? property.postDetail.restaurant + "m"
                    : property.postDetail.restaurant / 1000 + "km"}{" "}
                  away
                </p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="map-container">
            <Map properties={[property]} />
          </div>

          <div className="btn-container">
            <button type="button">
              <img src="/chat.png" alt="chat" />
              <span>Send a Message</span>
            </button>

            <button
              type="button"
              onClick={savePlace}
              style={{
                background: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="save" />
              <span>{saved ? "Place saved" : "Save the Place"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
