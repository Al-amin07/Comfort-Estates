import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div>
      <div>banner</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {allData.map((datas) => {
          return datas.map((data, i) => <Card key={i} data={data}></Card>);
        })}
      </div>
    </div>
  );
};

export default Home;
