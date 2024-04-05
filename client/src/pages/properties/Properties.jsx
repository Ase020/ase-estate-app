import { Card, Filter } from "../../components";
import { propertiesData } from "../../lib";
import "./properties.scss";

function Properties() {
  return (
    <div className="properties">
      <div className="properties-container">
        <div className="wrapper">
          <Filter />
          <div className="properties-wrapper">
            {propertiesData.map((property) => (
              <Card key={property.id} property={property} />
            ))}
            {propertiesData.map((property) => (
              <Card key={property.id} property={property} />
            ))}
            {propertiesData.map((property) => (
              <Card key={property.id} property={property} />
            ))}
            {propertiesData.map((property) => (
              <Card key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>

      <div className="map-container">map</div>
    </div>
  );
}

export default Properties;
