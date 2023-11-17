import React from 'react';
import { useFood } from '../Provider/FoodProvider';

const Order = () => {
    const { state:{orders,loading,error }} = useFood()

    let content
    if(loading){
       content= <p>"Loading Running...."</p>
    
    }
    if(error){
        content= <p>"Something is wrong"</p>
     
     }
     if(!loading && !error && orders.length===0){
        content= <p>" There is no order yet !!"</p>
     
     }

     if(!loading && !error && orders.length){
        content=  orders.map(order => (
            <div className="card card-compact bg-base-100 shadow-xl" key={order._id}>
                <figure><img src={order.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{order.name}</h2>
                    <h2 className="card-title"> Price: $ {order.price}</h2>
                    <p>Recipe: {order.recipe}</p>
                    
                </div>
            </div>

        ))
     
     }
    //console.log(foods)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {
               content
            }

        </div>
    )
};

export default Order;