import { useParams } from "react-router-dom";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import UseJobsData from "../../Hooks/UseJobsData";
import axios from "axios";


const EditJob = () => {
    const [jobData] = UseJobsData()
    const title = "You can edit hare"
    const params = useParams();
    
    const edeitData = jobData?.find(data => data._id === params.id);
    const {job_title, deadline, maximum_price, minimum_price, short_details, name, category, email} = edeitData;

    const handleEditJob = event =>{
        event.preventDefault();
        const form = event.target;
        const job_title = form.title.value;
        const deadline = form.deadline.value;
        const maximum_price = form.maximam.value;
        const minimum_price = form.minimam.value;
        const short_details = form.description.value;
        const name = form.name.value;
        const category = form.category.value;
        const email = form.email.value;
        const editJobInfo = {job_title, deadline, maximum_price, minimum_price, short_details, name, category, email}
       

        axios.patch(`http://localhost:5000/jobData/${params.id}`, editJobInfo)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <img src="/getjob.jpg" className="max-h-96 w-full" />
            </div>
            <SectionTitle title={title}></SectionTitle>
            <div className="max-w-2xl mx-auto border border-orange-300 rounded-xl p-2 bg-slate-100 shadow-lg shadow-black">
                    <h1 className="text-2xl text-center fontpop text-slate-600"><u>Fill All Details</u></h1>
                    <form onSubmit={handleEditJob}>
                        <div className="my-2">
                            <label htmlFor="email" className="block text-sm text-gray-500 ">Employer email</label>
                            <input readOnly defaultValue={email} type="text" name="email" placeholder="Your email" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="title" className="block text-sm text-gray-500 ">Job title</label>
                            <input type="text" defaultValue={job_title} name="title" placeholder="Job title" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="name" className="block text-sm text-gray-500 ">Name</label>
                            <input type="text" defaultValue={name} name="name" placeholder="Company name" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="deadline" className="block text-sm text-gray-500 ">Deadline </label>
                            <input type="date" defaultValue={deadline} name="deadline" placeholder="" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-stone-800" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="description" className="block text-sm text-gray-500 ">Description</label>
                            <input type="text" defaultValue={short_details} name="description" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="category" className="block text-sm text-gray-500 ">Category</label>
                            <select type="text" defaultValue={category} name="category" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" id="">
                                <option value="Graphics Design">
                                     Graphics Design
                                </option>
                                <option value="Digital Marketing">
                                     Digital Marketing
                                </option>
                                <option value="Web Development">
                                     Web Development
                                </option>
                            </select>
                        </div>
                        <div className="md:flex justify-between md:space-x-4">
                        <div className="my-2 md:w-1/2">
                            <label htmlFor="minimam" className="block text-sm text-gray-500 ">Minimam price</label>
                            <input type="number" defaultValue={minimum_price} name="minimam" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        <div className="my-2 md:w-1/2">
                            <label htmlFor="maximam" className="block text-sm text-gray-500 ">Maximam price</label>
                            <input type="number" defaultValue={maximum_price} name="maximam" className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-gray-700" />
                        </div>
                        </div>
                        <input className="py-3 px-4 my-3  bg-indigo-600 hover:bg-indigo-700 text-center w-full rounded-lg text-white transition ease-in duration-200" type="submit" value='Re submit' />
                    </form>
                </div>
        </div>
    );
};

export default EditJob;