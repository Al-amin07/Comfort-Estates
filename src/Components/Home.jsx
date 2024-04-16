import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Banner from "./Banner";
import 'animate.css';
import { useEffect } from "react";


const Home = () => {
  const allData = useLoaderData();

  useEffect(() => {
    document.title = 'Comfort Estate'
  }, [])
  return (
    <div>
      <div>
        <Banner></Banner>
        </div>
        <div className="mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">Choose Your Home</h2>
        <p className="md:w-3/4 lg:w-2/4 mx-auto text-center font-light">Find the best real estate site in Bangladesh. These blogs guide you through various aspects of the real estate home buying experience.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {
          allData.map((data, i) => <Card key={i} data={data}></Card>)
        }
      </div>
    </div>
  );
};

export default Home;
