

const BidRequestBox = ({requestData}) => {

    const {job_title, biderEmail, deadLine, price } = requestData;
    const handleChangeStatus = () =>{
        
    }

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
            <span className="relative">active</span>
          </span>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <button className="bg-green-700 p-2 rounded-lg text-white">
            Accept
          </button>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <button className="bg-red-600 p-2 rounded-lg text-white">
            Reject
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default BidRequestBox;
