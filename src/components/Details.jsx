import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";

const Details = () => {
    // const authInfo = useContext(AuthContext)
    // console.log(authInfo)
    const { treatment, image, description } = useLoaderData();
    return (
        <div className="w-11/12 mx-auto my-6">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                        <p className="mb-5">
                            {description}
                        </p>
                        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Appointment</button>
                        <Modal></Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;