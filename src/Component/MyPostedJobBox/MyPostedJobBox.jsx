import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJobBox = ({ item, refetch }) => {
  const navigate = useNavigate();

  const handleEditJob = (item) => {
    navigate(`/editJob/${item._id}`)
  }

  const handleDeletJob = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wont to delet this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/jobData/${item?._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });

  }

  return (
    <div className="w-64 p-4 m-auto bg-white hover:shadow-lg border-slate-300 border-[3px] rounded-2xl hover:shadow-slate-700 duration-700 hover:scale-105">
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
            <br />
            <span className="text-center block">
              $ {item?.minimum_price} to $ {item?.maximum_price}
            </span>
          </h2>
          <p className="mt-2 h-36">
            <b>Description:</b> {item?.short_details}
          </p>
        </div>
        <div className="flex justify-between gap-x-2">
          {/* <Link className="w-full" to={`/editJob/${item._id}`}>
        <button
              type="button"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
              Edit
            </button>
        </Link> */}
          <button
            onClick={() => handleEditJob(item) }
            type="button"
            className="py-2 px-4 bg-indigo-600 w-full hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDeletJob}
            type="button"
            className="py-2 px-4 w-full bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
          >
            Delet
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobBox;
