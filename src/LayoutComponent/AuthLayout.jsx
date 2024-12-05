import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div className="font-Poppins ">
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            {/* footer section */}
            <footer>
                <Footer className='bg-white'></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;