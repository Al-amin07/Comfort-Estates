import { useContext, useEffect } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const ViewProperty = () => {
  const { viewData } = useContext(AuthContext);
  console.log(viewData);
  const { img, estate_title, status, location, price, description, area, facilities, segment_name  } = viewData;

  useEffect(() => {
    document.title = `Comfort Estate | ${segment_name}`;
  }, [])

  return (
    <div className="flex flex-col lg:flex-row gap-8 shadow-2xl px-6 py-8 rounded-2xl   ">
      <div className="">
        <img className="h-[300px] md:h-[450px] rounded-lg" src={img} alt="" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold">{estate_title}</h2>
        <p className="text-slate-600 text-lg my-4">{description}</p>
        <p className="text-xl font-semibold mb-4">Category : {segment_name}</p>
        <div className="flex justify-between">
          <p className="text-2xl font-semibold text-green-600">Status : {status}</p>
          <p className="text-2xl font-semibold">Area : {area}</p>
        </div>
        <div className="flex justify-between my-5">
          <p className="text-2xl font-semibold">Location : {location}</p>
          <p className="text-3xl font-bold text-yellow-700">Price : {price}</p>
        </div>
        <div>
            <h2 className="text-3xl font-bold"> Facilities : </h2>
            <ul className="list-disc list-inside pt-3">
                {
                    facilities.map((f, i) => <li key={i} className="text-xl font-bold text-gray-500">{f}</li>)
                }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
