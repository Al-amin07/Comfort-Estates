import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Banner from "./Banner";
import 'animate.css';

const Home = () => {
  const allData = useLoaderData();
  
  return (
    <div>
      <div>
        <Banner></Banner>
        </div>
        <div className="mb-16">
        <h2 className="text-5xl font-bold text-center mb-4">Choose Your Home</h2>
        <p className="w-2/4 mx-auto text-center font-light">Find the best real estate site in Bangladesh. These blogs guide you through various aspects of the real estate home buying experience.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {allData.map((datas) => {
          return  datas.map((data, i) => <Card key={i} data={data}></Card>)
        })}
      </div>
    </div>
  );
};

export default Home;
