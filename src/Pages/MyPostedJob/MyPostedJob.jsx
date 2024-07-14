import SectionTitle from "../../Share/SectionTitle/SectionTitle";


const MyPostedJob = () => {
    const title = "My posted jobs"
    return (
        <div>
            <div>
                <img src="/getjob.jpg" className="max-h-96 w-full" />
            </div>
            <SectionTitle title={title}></SectionTitle>
        </div>
    );
};

export default MyPostedJob;