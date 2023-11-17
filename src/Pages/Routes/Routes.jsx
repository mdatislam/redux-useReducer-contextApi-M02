import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Friends from "../Friends/Friends";
import FriendDetail from "../Friends/FriendDetail";
import NotFound from "../NotFound/NotFound";
import DashBoard from "../LayOut/DashBoard";
import Order from "../Order/Order";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children:
        [
            {
                path: "Friends",
                element: <Friends />,
                loader:()=>fetch("https://jsonplaceholder.typicode.com/users")
              },
              {
                path: "friend/:friendId",
                element: <FriendDetail />,
                loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
              },
          {
            path: "About",
            element: <About />,
            loader:()=> fetch("https://bistroserver.bloperation.com/food")
          },
          {
            path: "Order",
            element: <Order />
          },
          {
            path: "Contact",
            element: <Contact />
          },
          {
            path: "*",
            element: <NotFound />
          },
        ]
  
    },
    {
        path:"/Dashboard",
        element:<DashBoard/>
    }
  ]);