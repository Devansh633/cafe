import React,{ useState } from 'react'
import { useDispatchCart,useCart } from './contextreducer'

const Sect = (props) => {

  const [count,setCount] = useState(props.qty);
  let dispatch = useDispatchCart()
  let  data = useCart() 
  
  const increment =() =>{
    setCount(count+1);
    dispatch({type:"ADD",id:props.id, name:props.name, price:props.price, image:props.img, qty:(count+1)});
    console.log(data)
  };

  const decrement =() =>{
    setCount(count-1);
  };

  return (
      <div>
          {count===0 ? <div className='flex flex-wrap p-[1rem] gap-[2rem]'>
            <h2 className='text-[1rem] px-[1rem] md:text-[2rem]'>{props.name}</h2>
            <div className='flex absolute right-[10rem]'>
            <button className='text-xl border-2 border-[#f0c808] rounded-l-md  w-8 h-8 my-3 px-2 pb-4' onClick={decrement}>-</button>
              <p className='text-xl  border-2 border-[#f0c808] w-8 h-8 my-3 px-2'>{count}</p>
            <button className='text-xl border-2  border-[#f0c808] rounded-r-md w-8 h-8 my-3 px-2 pb-4' onClick={increment}>+</button>
            </div>
            <h2 className='text-[1rem] absolute right-[3rem] sm:text-[2rem]'>{props.price}</h2>
          </div>: null}
      </div>
  )
}

export default Sect