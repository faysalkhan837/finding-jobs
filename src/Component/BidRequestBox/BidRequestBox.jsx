// import axios from "axios";
import UseStateChange from "../../Hooks/UseStateChange";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const BidRequestBox = ({ requestData }) => {

  const { job_title, biderEmail, deadLine, price, _id, state } = requestData;

  // const handleChangeStatus = (status, id) =>{
  //   axios.put(`http://localhost:5000/bidingData/${id}`, {status})
  //   .then(data => console.log(data.data))
  // }

  return (
    <tbody className="border-t-[3px] border-t-slate-300">
      <tr>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{job_title}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{biderEmail}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{deadLine}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{price}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 rounded-full opacity-50"
            ></span>
            <span className="relative">{state ? state : "pending"}</span>
          </span>
        </td>
        {
          state === "cancled" ?
            <div>
              <ProgressBar
                percent={100}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
              />
            </div>
            :
            <>
              <td className="px-5 py-4 text-sm bg-white text-center border-gray-200">
                <button onClick={() => UseStateChange("in progress", _id)} className="bg-green-700 p-2 rounded-lg text-white">
                  Accept
                </button>
              </td>
              <td className="px-5 py-4 text-sm bg-white text-center border-gray-200 max-w-max">
                <button onClick={() => UseStateChange("cancled", _id)} className="bg-red-600 p-2 rounded-lg text-white">
                  Reject
                </button>
              </td>
            </>
        }

      </tr>
    </tbody>
  );
};

export default BidRequestBox;
