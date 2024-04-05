import { Card } from "..";
import { propertiesData } from "../../lib";
import "./list.scss";

function List() {
  return (
    <div className="list">
      {propertiesData.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  );
}

export default List;
