import "./section.css"

const SectionTitle = ({title}) => {
    return (
        <div className="text-center mx-auto my-6">
            <p className="text-yellow-500 text-2xl font">---{title}---</p>
            {/* <h1 className="text-4xl uppercase border-y-2 py-3 my-3">{heading}</h1> */}
        </div>
    );
};

export default SectionTitle;