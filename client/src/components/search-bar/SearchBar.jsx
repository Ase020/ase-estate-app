import { useState } from "react";
import { Link } from "react-router-dom";
import "./search-bar.scss";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="search-bar">
      <div className="types">
        {types.map((type) => (
          <button
            type="button"
            onClick={() => switchType(type)}
            key={type}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10_000_000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10_000_000}
          placeholder="Max Price"
          onChange={handleChange}
        />

        <Link
          to={`/properties?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <img src="/search.png" alt="" />
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
