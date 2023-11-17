import { useFood } from "./Provider/FoodProvider";
import { actionTypes } from "./State/ActionTypes";


const About = () => {
    const { state:{foods,loading,error },dispatch} = useFood()

    let content
    if(loading){
       content= <p>"Loading Running...."</p>
    
    }
    if(error){
        content= <p>"Something is wrong"</p>
     
     }
     if(!loading && !error && foods.length===0){
        content= <p>" There is no product"</p>
     
     }

     if(!loading && !error && foods.length){
        content=  foods.map(food => (
            <div className="card card-compact bg-base-100 shadow-xl" key={food._id}>
                <figure><img src={food.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{food.name}</h2>
                    <h2 className="card-title"> Price: $ {food.price}</h2>
                    <p>Recipe: {food.recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"
                        onClick={()=>dispatch({type:actionTypes.order_submit,payload:food})}
                        >Buy Now</button>
                    </div>
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
    );
};

export default About;