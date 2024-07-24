import { FaSpinner } from "react-icons/fa6";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import MybidBox from "../../Component/MybidBox/MybidBox";
// import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const MyBid = () => {
  const [mybidData, setMybidData] = useState([])
  const {user, loading} = useContext(AuthContext);
  const title = "Find your bids";
  // const {data: mybidData, isLoading} = useQuery({ 
  //   queryKey: ["mybidData", user?.email],
  //   queryFn: async () =>{
  //     const res = axios.get(`http://localhost:5000/bidingData?email=${user?.email}`)
  //     return res.data;
  //   }
  // })
useEffect(()=>{
  axios.get(`http://localhost:5000/bidingData?email=${user?.email}`)
  .then(res => setMybidData(res.data))
  .catch(error =>console.log(error))
},[user?.email])
  
console.log(mybidData)



  return (
    <div>
      <div>
        <img src="/bidban.jpg" className="max-h-96 w-full" />
      </div>
      <SectionTitle title={title}></SectionTitle>
      {/* table */}
      <div>
        <div className="container max-w-3xl px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Job Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Deadline
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      ></th>
                    </tr>
                  </thead>
                  {
                    loading? <FaSpinner className="animate-spin"/> : 
                    mybidData.map(data => <MybidBox key={data._id} data={data}></MybidBox>)
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBid;
