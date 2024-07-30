import axios from "axios";

const UseStateChange = (status, id) => {
    axios.put(`http://localhost:5000/bidingData/${id}`, {status})
    .then(data => console.log(data.data))
    return 
};

export default UseStateChange;