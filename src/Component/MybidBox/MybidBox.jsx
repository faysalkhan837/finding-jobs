const MybidBox = ({data}) => {

  return (
    <tbody>
      <tr>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">Jean marc</p>
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
            <span className="relative">active</span>
          </span>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <button className="bg-blue-700 p-2 rounded-lg text-white">
            Complete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default MybidBox;
