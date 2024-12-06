import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import Loading from "../Components/Pages/Loading";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    
    console.log(location);

    if(loading){
        return <Loading></Loading>;
    }


    if (user) {
        return children;
    }
    return <Navigate state={location} to={`/auth/login`}></Navigate>
};

export default PrivateRoute;