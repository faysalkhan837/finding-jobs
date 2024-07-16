import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import MybidBox from "../../Component/MybidBox/MybidBox";

const MyBid = () => {
  const title = "Find your bids";
  const mybidData = useLoaderData();
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
