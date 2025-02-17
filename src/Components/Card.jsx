import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Link } from "react-router-dom";

 import AOS from 'aos';
 import 'aos/dist/aos.css';
//  let count = 0;
//  let str = '';
const Card = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: '1000',

    })
  }, [])

  const { handleProperty } = useContext(AuthContext);

  
  const { img, estate_title, location, price, area } = data;
  // count++;
  // if(count<4 || count> 6){
  //   str = 'fade-left';
  // }
  // else {
  //   str = 'fade-right'
  // }
  return (
   
    <div  data-aos="fade-up"  className="  border rounded-2xl  mb-5 bg-base-100 shadow-2xl flex flex-col">
      <figure >
        <img className="h-[250px]  w-full pt-6 px-6" src={img} alt="Home" />
      </figure>
      <div className=" p-6 space-y-4">
        <h2 className="card-title text-2xl lg:text-3xl font-bold">{estate_title}</h2>
        
        {/* <p className="text-slate-600">{description}</p> */}
        <div className="flex justify-between">
        <p className="text-2xl font-bold">Price : {price}</p>
          <p className="text-lg font-semibold">Area : {area}</p>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Location : {location}</p>
          
          
        </div>
     
        
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
