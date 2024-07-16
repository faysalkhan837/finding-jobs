import { useContext, } from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import { AuthContext } from "../../Provider/AuthProvider";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import MyPostedJobBox from "../../Component/MyPostedJobBox/MyPostedJobBox";
import UseJobsData from "../../Hooks/UseJobsData";


const MyPostedJob = () => {
    const [jobsData] = UseJobsData();
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    const title = "My posted jobs";
    const myPost = jobsData.filter(data => data.email === email)
    // const { data: myPost, isLoading } = useQuery({
    //     queryKey: ["myPost", user?.email],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://localhost:5000/jobData?email=${user?.email}`)
    //         return res.data;
    //     }
    // })
   
    return (
        <div>
            <div>
                <img src="/getjob.jpg" className="max-h-96 w-full" />
            </div>
            <SectionTitle title={title}></SectionTitle>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-4 ">
                {
                    loading ? <h1>Loading....</h1> :
                        myPost.map(post => <MyPostedJobBox key={post._id} item={post}></MyPostedJobBox>)
                }
            </div>
        </div>
    );
};

export default MyPostedJob;
