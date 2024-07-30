import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UseBidData = () => {
    const { data: bidData = [], isPending, refetch } = useQuery({
        queryKey: ["bidData"],
        queryFn: async () => {
            const res = await axios("http://localhost:5000/bidingData")
            return res.data;
        }
    })
    return [bidData, isPending, refetch]
};

export default UseBidData;