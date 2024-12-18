import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;