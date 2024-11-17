import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { treatment, image, description, cost, id } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full h-48"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">
                            {treatment}
                        </h2>
                        <span className="badge bg-green-600 text-white">$ {cost}</span>
                    </div>
                    <p title={description}>{description.slice(0, 200)}...</p>
                    <Link to={`/detail/${id}`} className="btn btn-sm bg-green-600 text-white">Checkout More</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;