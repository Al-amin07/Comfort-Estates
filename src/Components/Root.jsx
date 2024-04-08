import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";


const Root = () => {
    return (
        <div>
           <div className="max-w-7xl mx-auto">
           <Nav></Nav>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;