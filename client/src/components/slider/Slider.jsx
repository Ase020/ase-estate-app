import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./slider.scss";
import { useState } from "react";

function Slider({ images }) {
  const [imgIndex, setImgIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imgIndex === 0) {
        setImgIndex(images.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex === images.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imgIndex !== null && (
        <div className="image-slider">
          <div className="right-arrow">
            <img
              src="/arrow.png"
              alt="arrow-right"
              onClick={() => changeSlide("left")}
            />
          </div>

          <div className="image-container">
            <img src={images[imgIndex]} alt="" />
          </div>

          <div className="left-arrow">
            <img
              src="/arrow.png"
              alt="arrow-left"
              onClick={() => changeSlide("right")}
            />
          </div>

          <CloseOutlinedIcon
            color="inherit"
            fontSize="large"
            className="close"
            onClick={() => setImgIndex(null)}
          />
        </div>
      )}

      <div className="main">
        <img src={images[0]} alt="1" onClick={() => setImgIndex(0)} />
      </div>

      <div className="sub">
        {images.slice(1).map((img, i) => (
          <img
            key={`image ${img} ${i}`}
            src={img}
            alt={`image ${i}`}
            onClick={() => setImgIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
