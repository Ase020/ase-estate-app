import { useState } from "react";
import "./search-bar.scss";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
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
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10_000_000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10_000_000}
          placeholder="Max Price"
        />

        <button type="submit">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
