


const Feedback = ({ feedback }) => {
    const { name, userImg, review } = feedback;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="flex items-center gap-4 mt-6 ml-6">
                <img className="w-12 h-12 rounded-full" src={userImg} alt="" />
                <h2 className="card-title">{name}</h2>
                <span>{new Date().toDateString()}</span>
            </div>
            <div className="card-body">
                <p className="text-xl font-semibold">Review:</p>
                <p>{review}</p>
                <div className="card-actions justify-between items-center">
                    <span className="text-xl font-semibold">Rating:</span>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <button className="btn btn-sm bg-green-600 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;