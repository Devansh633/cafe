import React,{useState} from 'react'
import { useCart, useDispatchCart } from './contextreducer';
import Sect from './sect'

const Cart = () => {
  let data = useCart();
  let dispatch = useDispatchCart();
  const [click,setClick] = useState(false);
  const [count,setCount] = useState(1);
  if (data.length === 0) {
    return (
      <div>
        <div className='text-center text-white text-[2rem] py-6'>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/auth/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  const increment =() =>{
    setCount(count+1);
    // dispatch({type:"ADD",id:props.id, name:props.name, price:props.price, image:props.img, qty:count});
    console.log(data)
  };

  const decrement =() =>{
    setCount(count-1);
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>

      {console.log(data)}
      <div className='text-[2rem] text-white mt-[1rem]' >
        
        {data.map((food, index) => (
          <Sect key={food.id} name={food.name} price={food.price} qty={food.qty}></Sect>

        ))}

        
      </div>
      
      <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
      <div>
        <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
      </div>
      



    </div>
  )
}

export default Cart