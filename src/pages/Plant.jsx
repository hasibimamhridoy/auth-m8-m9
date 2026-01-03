import React from "react";
import { useLoaderData, useParams } from "react-router";
import { PlantCard } from "./Plants";

const Plant = () => {
  const params = useParams();

  console.log("params", params);

  const data = useLoaderData();

  console.log("data", data);

  const plant = data.find((p) => p.plantId === parseInt(params.id));

  console.log(plant);

  return (
    <div>
      <PlantCard plant={plant} />
    </div>
  );
};

export default Plant;
