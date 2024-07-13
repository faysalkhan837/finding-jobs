import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleregister =()=>{
        googleSignIn()
        .then(result => {
            const userInfo = {
                name:result.user?.displayName,
                email:result.user?.email
            }
            axios.post("http://localhost:5000/users", userInfo)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "user create successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            })
            navigate('/');
        })
    }
  return (
    <div>
      <button onClick={handleGoogleregister} aria-label="Log in with Google" className="p-1 rounded-sm">
        <img
          src="/google.png"
          className=" shadow-md shadow-slate-400 bg-white rounded-xl"
        />
      </button>
    </div>
  );
};

export default SocialLogin;
