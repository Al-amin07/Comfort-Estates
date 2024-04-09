import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const Private = ({children}) => {
    const location = useLocation();
    console.log(location)

    const { user } = useContext(AuthContext)
   if(user){
        return children;
   }
   return <Navigate state={location.pathname} to='/login'></Navigate>
};

Private.propTypes = {
    children: PropTypes.node
}

export default Private;