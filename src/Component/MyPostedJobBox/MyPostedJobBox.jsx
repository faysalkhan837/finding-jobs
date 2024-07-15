import { Link } from "react-router-dom";

const MyPostedJobBox = ({ item }) => {
  console.log(item._id)
  return (
    <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl shadow-black">
      <div className="w-full h-full">
        <h1 className="text-lg text-center h-14">
          <b>{item?.job_title}</b>
        </h1>
        <div className="text-start py-2">
          <h2>
            <b>Deadline:</b> {item?.deadline}
          </h2>
          <h2>
            <b>Price range:</b>
            <br />{" "}
            <span className="text-center block">
              $ {item?.minimum_price} to $ {item?.maximum_price}
            </span>
          </h2>
          <p className="mt-2 h-36">
            <b>Description:</b> {item?.short_details}
          </p>
        </div>
       <Link to={`/editJob/${item._id}`}>
       <div className="flex items-center justify-between w-full gap-4">
            <button
              type="button"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
              Edit
            </button>
        </div>
       </Link>
      </div>
    </div>
  );
};

export default MyPostedJobBox;
