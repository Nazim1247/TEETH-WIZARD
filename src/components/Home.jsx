import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import Feedback from "./Feedback";


const Home = () => {
    const services = useLoaderData();
    const {serviceData,feedBackData} = services;
    return (
        <div className="w-11/12 mx-auto mt-6">
            <Banner></Banner>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
                {
                    serviceData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <div className="text-center">
            <Link to='/allTreatments' className="btn bg-green-600 my-6 text-white">Show All</Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    feedBackData.map(feedback => <Feedback key={feedback.reviewId} feedback={feedback}></Feedback>)
                }
            </div>
        </div>
    );
};

export default Home;