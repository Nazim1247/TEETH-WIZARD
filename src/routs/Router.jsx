import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import About from "../components/About";
import Home from "../components/Home";
import AllTreatments from "../components/AllTreatments";
import MyAppointments from "../components/MyAppointments";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:async ()=> {
                    const serviceRes = await fetch('/service.json');
                    const serviceData = await serviceRes.json();

                    const feedBackRes = await fetch('/happyclients.json');
                    const feedBackData = await feedBackRes.json();

                    return {serviceData,feedBackData};
                }
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>,
                loader: ()=> fetch('/service.json')
            },
            {
                path: '/myAppointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/detail/:id',
                element: <Details></Details>,
                loader:async ({params})=>{
                    const res = await fetch('/service.json');
                    const data = await res.json();
                    const singleData = data.find(d =>d.id == params.id);
                    return singleData;
                }
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;