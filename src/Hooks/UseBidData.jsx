import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UseBidData = () => {
    const { refetch, data: bidData = [], isPending } = useQuery({
        queryKey: ["bidData"],
        queryFn: async () => {
            const res = await axios("http://localhost:5000/bidingData")
            return res.data;
        }
    })
    return [bidData, isPending, refetch];
};

export default UseBidData;