

const Modal = () => {
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className="hero bg-base-200 min-h-screen">
                        <div className="hero-content flex-col">
                            <div className="text-center lg:text-left">
                                {/* <h1 className="text-3xl font-bold">Login now!</h1> */}

                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text"
                                        name='name'
                                        placeholder="First Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text"
                                        name="name"
                                        placeholder="Last Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="text" placeholder="Phone Number" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Appointment Date</span>
                                        </label>
                                        <input type="Date" placeholder="Date" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="Address" className="input input-bordered" required />
                                        {/* <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label> */}
                                    </div>
                                    <div className="form-control mt-6">
                                        {/* <button className="btn btn-primary">Login</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <form method="dialog">
                            <button className="btn btn-sm  w-1/2 mx-auto bg-green-600 text-white mt-2">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;