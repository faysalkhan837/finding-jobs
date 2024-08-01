import axios from "axios";
// import UseBidData from "./UseBidData";

const UseStateChange = (status, id) => {
    // const [refetch] = UseBidData();
    axios.put(`http://localhost:5000/bidingData/${id}`, {status})
    .then(data => console.log(data))
};

export default UseStateChange;