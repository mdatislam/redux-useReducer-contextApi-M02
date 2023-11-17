import { useLoaderData } from "react-router-dom";


const FriendDetail = () => {
    const friendDetail=useLoaderData()
    console.log(friendDetail)
    return (
        <div>
            <h2 className="text-center, text-blue-400">Name:{friendDetail.name}</h2>
        </div>
    );
};

export default FriendDetail;