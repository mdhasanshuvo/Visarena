import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div className="font-Poppins">
            <div className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </div>
            <div className="mt-0 sm:mt-10">
                <Outlet></Outlet>
            </div>
            {/* footer section */}
            <footer>
                <Footer className='bg-white'></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;