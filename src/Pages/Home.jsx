import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header/Header";


const Home = () => {
const navigation = useNavigation()

//https://bistroserver.bloperation.com/food
    return (
        <div>
            <Header/>
           <div>
            {navigation.state=== "Loading" && "Loading..."}
           </div>
           <div className="bg-slate-300 mt-3 min-h-100%">
           <Outlet/>
           </div>
           
        </div>
    );
};

export default Home;