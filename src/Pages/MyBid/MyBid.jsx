import { FaSpinner } from "react-icons/fa6";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import MybidBox from "../../Component/MybidBox/MybidBox";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseBidData from "../../Hooks/UseBidData";

const MyBid = () => {
  // const [mybidData, setMybidData] = useState([])
  const {user} = useContext(AuthContext);
  const [bidData, isPending, refetch] = UseBidData();
  const mybidData = bidData.filter(data => data.biderEmail === user.email)
  const title = "My bids";

// useEffect(()=>{
//   axios.get(`http://localhost:5000/bidingData?email=${user?.email}`)
//   .then(res => setMybidData(res.data))
//   .catch(error =>console.log(error))
// },[user])
  

console.log(mybidData)


  return (
    <div>
      <div>
        <img src="/bidban.jpg" className="max-h-96 w-full" />
      </div>
      <SectionTitle title={title}></SectionTitle>
      {/* table */}
      <div>
        <div className="container max-w-4xl px-4 mx-auto sm:px-8 shadow-xl">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal border-slate-300 border-[3px]">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm text-left text-gray-800 uppercase bg-white border-b border-gray-200 font-bold"
                      >
                        Job Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Deadline
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      ></th>
                    </tr>
                  </thead>
                  {
                    isPending? <FaSpinner className="animate-spin"/> : 
                    mybidData.map(data => <MybidBox key={data._id} data={data} refetch={refetch}></MybidBox>)
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
