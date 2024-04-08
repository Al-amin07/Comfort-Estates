import { useEffect, useState } from 'react'

import './App.css'
// import Cards from './Cards'
import Card from './Components/Card';

function App() {
  const [allData, setAllData] = useState([])

  useEffect(() => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setAllData(data))
  }, []);
  //  console.log(allData);
   

  return (
    <>

      
      <h1>Vite + React</h1>
      <div className="grid grid-cols-3 gap-5 ">{
        allData.map((datas) => {
          return datas.map((data, i) => <Card key={i} data={data}></Card>)
        })
      }  
      </div>   
    </>
  )
}

export default App
