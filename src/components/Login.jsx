import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
    const {handleGoogleLogin,handleLogin,handleLogout} = useContext(AuthContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password)
        handleLogin(email,password)
    }

    return (
        <div className="w-11/12 mx-auto"><div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-1/2 mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-sm w-1/2 mx-auto">Login With Google</button>
            <br />
            <button onClick={handleLogout}>Logout</button>
            <br />
            <Link to='/register' className="text-center py-4">New to this page? <span className="text-red-600">Register</span></Link>
          </div>
        </div>
      </div>

            
        </div>
    );
};

export default Login;