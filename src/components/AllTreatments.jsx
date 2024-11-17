import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const AllTreatments = () => {

    const services = useLoaderData();
    return (
        <div className="w-11/12 mx-auto grid md:grid-cols-4 gap-4 mt-6">
            {
                services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllTreatments;