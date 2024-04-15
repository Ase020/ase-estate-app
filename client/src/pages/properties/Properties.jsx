import { Await, useLoaderData } from "react-router-dom";

import { Card, Filter, Map } from "../../components";

import "./properties.scss";
import { Suspense } from "react";

function Properties() {
  const properties = useLoaderData();
  return (
    <div className="properties">
      <div className="properties-container">
        <div className="wrapper">
          <Filter />
          <div className="properties-wrapper">
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={properties.propertiesResponse}
                errorElement={<p>Error loading properties!</p>}
              >
                {(propertiesResponse) =>
                  propertiesResponse.data.map((property) => (
                    <Card key={property.id} property={property} />
                  ))
                }
              </Await>
            </Suspense>
          </div>
        </div>
      </div>

      <div className="map-container">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={properties.propertiesResponse}
            errorElement={<p>Error loading properties!</p>}
          >
            {(propertiesResponse) => (
              <Map properties={propertiesResponse.data} />
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default Properties;
