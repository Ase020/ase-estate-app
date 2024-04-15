import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

import { UploadWidget } from "../../components";
import apiRequest from "../../lib/apiRequest";

import "./new-property.scss";
import "react-quill/dist/quill.snow.css";

function NewProperty() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const propertyData = Object.fromEntries(formData);

    try {
      const response = await apiRequest.post("/posts", {
        postData: {
          title: propertyData.title,
          price: parseInt(propertyData.price),
          address: propertyData.address,
          city: propertyData.city,
          bedroom: parseInt(propertyData.bedroom),
          bathroom: parseInt(propertyData.bathroom),
          type: propertyData.type,
          property: propertyData.property,
          latitude: propertyData.latitude,
          longitude: propertyData.longitude,
          images: images,
        },
        postDetail: {
          description: value,
          utilities: propertyData.utilities,
          petPolicy: propertyData.pet,
          income: propertyData.income,
          size: parseInt(propertyData.size),
          school: parseInt(propertyData.school),
          bus: parseInt(propertyData.bus),
          restaurant: parseInt(propertyData.restaurant),
        },
      });

      navigate(`/properties/${response.data.id}`);
    } catch (error) {
      setErr(true);
      console.log("Error: ", error);
    }
  };
  return (
    <div className="new-property">
      <div className="formContainer">
        <h1>Add New Post</h1>

        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>

            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" required />
            </div>

            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>

            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill
                theme="snow"
                onChange={setValue}
                value={value}
                required
              />
            </div>

            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>

            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                required
              />
            </div>

            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                required
              />
            </div>

            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" required />
            </div>

            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" required />
            </div>

            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property" required>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" required>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" required>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                required
              />
            </div>

            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" required />
            </div>

            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" required />
            </div>

            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" required />
            </div>

            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                required
              />
            </div>

            <button type="submit" className="sendButton">
              Add
            </button>

            {err && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.slice(0, 4).map((image) => (
          <img src={image} key={image} alt="image" />
        ))}
        <UploadWidget
          uwConfig={{
            cloudName: "dyzqsffhe",
            folder: "posts",
            multiple: true,
            uploadPreset: "estate",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewProperty;
