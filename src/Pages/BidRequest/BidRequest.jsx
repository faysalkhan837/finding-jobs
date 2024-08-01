
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BidRequestBox from "../../Component/BidRequestBox/BidRequestBox";
import UseBidData from "../../Hooks/UseBidData";
import { FaSpinner } from "react-icons/fa6";

const BidRequest = () => {
  const title = "All request bids";
  const {user} = useContext(AuthContext);
  const [bidData, isPending, refetch] = UseBidData();
  const bidingRequestData = bidData?.filter(data => data.buyerEmail === user?.email)
  // console.log(bidingRequestData)
  return (
    <div>
      <div>
        <img src="/bidban.jpg" className="max-h-96 w-full" />
      </div>
      <SectionTitle title={title}></SectionTitle>
      {/* table */}
      <div>
        <div className="container max-w-5xl px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal border-[3px] border-slate-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
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
                        Price
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
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      ></th>
                    </tr>
                  </thead>
                  {
                    isPending? <FaSpinner className="animate-spin" /> :
                    bidingRequestData.map(requestData => <BidRequestBox key={requestData._id} requestData={requestData} refetch={refetch}></BidRequestBox>)
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

export default BidRequest;
