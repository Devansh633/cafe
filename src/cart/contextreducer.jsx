import React,{createContext,useReducer,useContext} from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "ADD":
            return[...state,{id:action.id, name:action.name, price:action.price, image:action.img, qty:action.qty}]

            default:
                console.log("Error is Reducer")
    }
}

export const CartProvider = ({children}) =>{

    const[state,dispatch] = useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)