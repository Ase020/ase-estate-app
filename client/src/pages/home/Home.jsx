import { SearchBar } from "../../components";
import "./home-page.scss";

const Home = () => {
  return (
    <div className="home-page">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1 className="">16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1 className="">200</h1>
              <h2>Awards Gained</h2>
            </div>

            <div className="box">
              <h1 className="">1200+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="img-container">
        <img src="/bg.png" alt="bg-image" />
      </div>
    </div>
  );
};

export default Home;
