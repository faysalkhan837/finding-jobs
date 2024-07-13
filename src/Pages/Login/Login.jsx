import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signInUser(email, password)
        .then(result => {
            if(result.user){
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "You are sucessfully loged In",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
            navigate('/')
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="flex md:p-10 justify-center py-2">
      <div className=" w-1/2 lg:flex justify-center items-center hidden">
        <img
          src="/signup12.png"
          className="shadow-md shadow-slate-400 rounded-xl"
        />
      </div>
      <div className=" md:w-1/2 flex md:justify-end justify-center ">
        <div className=" max-w-md md:px-8 p-2 space-y-3 rounded-xl bg-slate-100 text-slate-900 flex flex-col justify-center shadow-md shadow-slate-400">
          <h1 className="text-2xl font-bold text-center">LogIn</h1>
          <form onSubmit={handleLogin} className="space-y-3">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-600"
              >
                Email
              </label>
              <input
                autoComplete="email"
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="w-full px-4 py-3 rounded-lg border-gray-700 text-gray-500 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-600"
              >
                Password
              </label>
              <input
                autoComplete="current-password"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border-gray-700  text-gray-500 focus:border-violet-400"
              />
              <div className="flex justify-end text-xs text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              className="block w-full p-3 text-center text-white  bg-indigo-600 hover:bg-indigo-700 rounded-lg"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="flex items-center pt-2 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            
            <SocialLogin></SocialLogin>
            <button aria-label="Log in with Twitter" className="p-1 rounded-sm">
              <img
                src="/facebook.png"
                className=" shadow-md shadow-slate-400 bg-white rounded-xl"
              />
            </button>
            <button aria-label="Log in with GitHub" className="p-1 rounded-sm">
              <img
                src="/git.png"
                className=" shadow-md shadow-slate-400 bg-white rounded-xl"
              />
            </button>
          </div>
          <p className="text-sm text-center sm:px-6 text-gray-400">
            Are you new hare? go to <Link to="/signUp"><span className="text-blue-500">Sign Up</span></Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Login;