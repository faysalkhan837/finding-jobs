import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UseJobsData = () => {
   const {data: jobsData=[], isPending: loding, refetch} = useQuery({
    queryKey:["jobsData"],
    queryFn: async () =>{
        const res = await axios.get("http://localhost:5000/jobData")
        return res.data;
    }
   })
   return [jobsData, loding, refetch]
};

export default UseJobsData;