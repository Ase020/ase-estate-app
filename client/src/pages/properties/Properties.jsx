import { useLoaderData } from "react-router-dom";

import { Card, Filter, Map } from "../../components";

import "./properties.scss";

function Properties() {
  const properties = useLoaderData();
  return (
    <div className="properties">
      <div className="properties-container">
        <div className="wrapper">
          <Filter />
          <div className="properties-wrapper">
            {properties.map((property) => (
              <Card key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>

      <div className="map-container">
        <Map properties={properties} />
      </div>
    </div>
  );
}

export default Properties;
