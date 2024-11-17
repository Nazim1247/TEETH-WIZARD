
import banner from '../assets/banner.png'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="w-full" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn bg-green-600 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;