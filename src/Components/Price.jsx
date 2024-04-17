import { useEffect } from "react";

const Price = () => {

    useEffect(() => {
        document.title = "Licence | Comfort Estate";
      }, [])
  return (
   <div className="flex flex-col gap-4 ">
     <div className="flex mx-auto flex-col md:flex-row gap-5">
      <div className="bg-[#6A2CAD] space-y-3 text-white text-center px-2 py-8 rounded-xl">
        <h2 className="text-2xl font-bold">Regular Licenses</h2>
        <p className="w-11/12 mx-auto">You <span className="text-red-400 font-semibold">cant charge</span> from your End Product End Users</p>
        <button className="btn bg-[#04AAF5] border-0 w-1/2 mx-auto">Buy Now</button>
      </div>
      <div className="bg-[#9E29A0] space-y-3 text-white text-center px-2 py-8 rounded-xl">
        <h2 className="text-2xl font-bold">Extended Licenses</h2>
        <p className="w-11/12 mx-auto">You <span className="text-green-400 font-semibold">can charge</span> from your End Product End Users</p>
        <button className="btn bg-[#04AAF5] border-0 w-1/2 mx-auto">Buy Now</button>
      </div>
    </div>
    <div className="bg-slate-200 px-5  py-4 rounded-xl">
        <h2 className="text-2xl font-bold text-red-600">Important License terms </h2>
        <ul className="list-disc list-inside mt-3">
          <li className="text-lg font-medium">Usage License</li>
          <li className="text-lg font-medium">Content License</li>
          <li className="text-lg font-medium">Listing Agreement</li>
          <li className="text-lg font-medium">User-generated Content</li>
          <li className="text-lg font-medium">Intellectual Property Rights</li>
          <li className="text-lg font-medium">Compliance with Laws</li>
        </ul>
    </div>
   </div>
  );
};

export default Price;
