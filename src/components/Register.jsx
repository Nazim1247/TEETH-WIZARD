import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const {handleRegister} = useContext(AuthContext);
    // console.log(handleRegister)
    const handleSubmit = (e)=>{
        e.preventDefault();
        // const name = e.target.name.value;
        // const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const conPassword = e.target.conPassword.value;
        // console.log(name,photo,email,password,conPassword)
        handleRegister(email,password)
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col w-1/2 mx-auto">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
        </div>
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='conPassword' placeholder="confirmPassword" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <Link to='/login' className="text-center py-6">Already have an account? <span className="text-red-600">Login</span></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;