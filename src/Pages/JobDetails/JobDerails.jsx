import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import "./jobDetails.css"
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const JobDerails = () => {
     
    const navigate = useNavigate();
    const detailsJob = useLoaderData();
    const title = "Details of Job";
    const bidForm = "Bid Your Job"
    const { name, deadline, minimum_price, maximum_price, short_details, email, job_title, _id } = detailsJob;
    const {user} = useContext(AuthContext);
    const isExsist = user?.email == email;
    
    
    const handleBidForm = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const deadLine = form.deadline.value;
        const biderEmail = form.useremail.value;
        const buyerEmail = form.buyeremail.value;
        const bidInfo = { price, deadLine, biderEmail, buyerEmail, job_title, id:_id }
        // console.log(bidInfo)

        axios.post("http://localhost:5000/bidingData", bidInfo)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            setTimeout(()=>{
                navigate('/mybid')
            }, 2000);
    }

    return (
        <div>
            <div>
                <img src="/getjob.jpg" className="max-h-96 w-full" />
            </div>
            <SectionTitle title={title}></SectionTitle>
            <div className="px-2">
                <div className="fontpop text-lg text-slate-600 max-w-2xl mx-auto border border-orange-300 rounded-xl p-2 bg-slate-100 shadow-lg shadow-black flex flex-col gap-y-4 font-bold">
                    <h1>Name: {name}</h1>
                    <h1>Deadline: {deadline}</h1>
                    <h1>Price Range: <span className="text-orange-400">$ {minimum_price}</span> to <span className="text-orange-500">$ {maximum_price}</span></h1>
                    <p>Details: {short_details}</p>
                </div>
                <SectionTitle title={bidForm}></SectionTitle>
                <div className="max-w-2xl mx-auto border border-orange-300 rounded-xl p-2 bg-slate-100 shadow-lg shadow-black">
                    <h1 className="text-2xl text-center fontpop text-slate-600"><u>Fill All Details</u></h1>
                    <form onSubmit={handleBidForm}>
                        <div className="my-2">
                            <label htmlFor="price" className="block text-sm text-gray-500 ">Price</label>
                            <input type="number" name="price" required placeholder="Your price" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="deadline" className="block text-sm text-gray-500 ">Deadline </label>
                            <input type="date" name="deadline" required placeholder="" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="userEmail" className="block text-sm text-gray-500 ">User Email</label>
                            <input type="text" name="useremail" defaultValue={user.email} readOnly className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="Buyeremail" className="block text-sm text-gray-500 ">Buyer Email</label>
                            <input type="text" name="buyeremail" defaultValue={email} readOnly className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        
                            <input  disabled={isExsist? true : false} className="py-3 px-4 my-3  bg-indigo-600 disabled:bg-slate-300 hover:bg-indigo-700 text-center w-full rounded-lg text-white transition ease-in duration-200" type="submit" value='Bid on the project' />
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobDerails;