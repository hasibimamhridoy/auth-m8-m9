import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Plants = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("plants.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log("data", data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
      {loading ? (
        <div>Loading </div>
      ) : (
        data.map((plant) => {
          return <PlantCard key={plant.id} plant={plant} />;
        })
      )}
    </div>
  );
};

export const PlantCard = ({ plant }) => {
  return (
    <div className="border shadow p-3">
      <h1>Plant Name : {plant?.plantName}</h1>
      <p>Plant category : {plant?.category}</p>
      <Link to={`/plants/${plant.plantId}`}>
        <button className="p-3 bg-green-400 rounded-full">View Details</button>
      </Link>
    </div>
  );
};

export default Plants;
