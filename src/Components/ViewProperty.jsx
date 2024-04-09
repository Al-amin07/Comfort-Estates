import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const ViewProperty = () => {
  const { viewData } = useContext(AuthContext);
  console.log(viewData);
  const { img, estate_title, status, location, price, description, area, facilities  } = viewData;

  return (
    <div className="flex gap-8 shadow-2xl px-6 py-12 rounded-2xl   ">
      <div className="">
        <img className="h-[450px] rounded-lg" src={img} alt="" />
      </div>
      <div className="w-1/2">
        <h2 className="text-5xl font-bold">{estate_title}</h2>
        <p className="text-slate-600 text-lg my-4">{description}</p>
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">Status : {status}</p>
          <p className="text-2xl font-semibold">Area : {area}</p>
        </div>
        <div className="flex justify-between my-5">
          <p className="text-2xl font-semibold">Location : {location}</p>
          <p className="text-3xl font-bold">Price : {price}</p>
        </div>
        <div>
            <h2 className="text-3xl font-bold"> Facilities : </h2>
            <ul className="list-disc list-inside">
                {
                    facilities.map((f, i) => <li key={i} className="text-xl font-semibold">{f}</li>)
                }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
