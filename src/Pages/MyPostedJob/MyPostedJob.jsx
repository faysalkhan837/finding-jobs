import { useContext,} from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const MyPostedJob = () => {
  const { user, loading } = useContext(AuthContext);
  const email = user?.email;
  const title = "My posted jobs";
console.log(email)
    const {data: myPost, isLoading} = useQuery({
        queryKey:["myPost", user?.email],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:5000/jobData?email=${user?.email}`)
            return res.data;            
        }
    })
    console.log(myPost)
  return (
    <div>
      <div>
        <img src="/getjob.jpg" className="max-h-96 w-full" />
      </div>
      {loading && <h1>Loading.....</h1>}
      <SectionTitle title={title}></SectionTitle>
    </div>
  );
};

export default MyPostedJob;
