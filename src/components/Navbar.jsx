import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-blue-950 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto py-6 gap-4">
                <div>
                    <h2 className="text-xl font-bold">TEETH WIZARD</h2>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <NavLink to='/' className={({isActive})=>isActive?'bg-green-600 px-4':''}>Home</NavLink>
                    <NavLink to='/allTreatments' className={({isActive})=>isActive?'bg-green-600 px-4':''}>All Treatments</NavLink>
                    <NavLink to='/myAppointments' className={({isActive})=>isActive?'bg-green-600 px-4':''}>My appointments</NavLink>
                    <NavLink to='/profile' className={({isActive})=>isActive?'bg-green-600 px-4':''}>Profile</NavLink>
                </div>
                <div>
                    <Link to='/login' className="btn btn-sm bg-green-600 rounded-none border-none text-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;