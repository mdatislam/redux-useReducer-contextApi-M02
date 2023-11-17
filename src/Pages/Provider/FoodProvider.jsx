import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';
import { foodReducer, initialState } from '../State/FoodReducer';
import { actionTypes } from '../State/ActionTypes';
import { useLoaderData } from 'react-router-dom';

 export const food_context = createContext()
const FoodProvider = ({ children }) => {
    //const [foods,setFood]=useState([])
    //const foods=useLoaderData()
    const [state, dispatch] = useReducer(foodReducer, initialState)
    console.log(state)
    useEffect(() => {
        dispatch({ type: actionTypes.loading_start })

        fetch("https://bistroserver.bloperation.com/food")
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                //setFood(data)
                dispatch({ type: actionTypes.loading_success, payload: data })
            })
            .catch((error) => dispatch({ type: actionTypes.loading_error }))

    }, [children])
    // const value={ foods}
    const value = { state, dispatch }
    //console.log(food)

    return (
        <div>
            <food_context.Provider value={value}>
                {children}
            </food_context.Provider>

        </div>
    );
};

export const useFood = () => {
    const context = useContext(food_context)
    return context
}

export default FoodProvider;
