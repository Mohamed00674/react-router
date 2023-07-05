import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData()
  return (
    <div className="career-details">
      <h2>Carrer Details : {career.title}</h2>
      <p>starting salary: {career.salary}</p>
      <p>Location of the career is {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quis provident deleniti! Quis aut enim fugit. Iure maiores quia veniam. Quasi esse magnam soluta inventore recusandae eaque reiciendis sunt dolorem.</p>
      </div>
    </div>
  );
}

export const carrerDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);
  return res.json();
};

export default CareerDetails;
