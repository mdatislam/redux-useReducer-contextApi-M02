import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";



const Friends = () => {
    const friends = useLoaderData()
    return (
        <div className=" text-center">
            Total Friend Data is {friends.length}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {
                friends.map((dosto)=>(<Friend key={dosto.id} dosto={dosto}></Friend>))
            }
            </div>
        </div>
    );
};

export default Friends;