import { Card } from "..";
import "./list.scss";

function List({ posts }) {
  return (
    <div className="list">
      {Array.isArray(posts) &&
        posts.map((property) => <Card key={property.id} property={property} />)}
    </div>
  );
}

export default List;
