import axios from "axios";


const MybidBox = ({data, refetch}) => {

  const handleChangeStatus = (status, id) => {
    axios.put(`http://localhost:5000/bidingData/${id}`, { status })
      .then(data => {
        if(data.data.acknowledged == true){
          refetch()
        } 
      })

  }

  return (
    <tbody className="border-t-slate-300 border-t-[3px]">
      <tr>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{data.job_title}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{data.biderEmail
}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">12/09/2020</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 rounded-full opacity-50"
            ></span>
            <span className="relative">{data.state}</span>
          </span>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
         {
          data.state === "in progress" && 
          <button onClick={()=>handleChangeStatus("complete", data?._id)} className="bg-blue-700 p-2 rounded-lg text-white">
          Complete
        </button>
         }
        </td>
      </tr>
    </tbody>
  );
};

export default MybidBox;
