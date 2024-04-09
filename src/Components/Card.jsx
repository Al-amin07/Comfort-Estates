import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Link } from "react-router-dom";

const Card = ({ data }) => {

  const { handleProperty } = useContext(AuthContext)
  
  const { img, estate_title, status, location, price, description, area } = data;
  return (
    <div className=" border rounded-2xl  mb-5 bg-base-100 shadow-2xl flex flex-col">
      <figure >
        <img className="h-[250px]  w-full pt-6 px-6" src={img} alt="Home" />
      </figure>
      <div className=" p-6 space-y-4">
        <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
        
        <p className="text-slate-600">{description}</p>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Status : {status}</p>
          <p className="text-lg font-semibold">Area : {area}</p>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Location : {location}</p>
          <p className="text-2xl font-bold">Price : {price}</p>
        </div>
        {/* <div className="">
          <h2 className="text-xl font-bold">Facilities : </h2>
         <ul className="list-disc list-inside flex-grow">
         {
            facilities.map((f,i) => <li key={i} className="">{f}</li>)
          }
         </ul>
        </div> */}
        
        <div className="card-actions ">
          <Link to='/property'>
          <button onClick={() => handleProperty(data)} className="btn btn-primary">View Property</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
