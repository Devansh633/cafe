import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Loggedout from '../loggedout';
import Owner from '../owner/owner';
import Admin from '../admin/admin'

const Home = () => {

  const navigate = useNavigate();
  const[role,setRole] = useState("")
  const[loginStatus,setLoginStatus] = useState(false)

  const callPage = async() => {
    try{
      const res = await fetch('/home',{
        method:'GET',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        ,
      credentials:'include'}
      });

      const data = await res.json();
      setRole(data.role)
      setLoginStatus(true)
      if(!res.status === 200){
        const error = new Error(res.error)
        setLoginStatus(false)
        throw error
      }
    }catch(err){
      console.log(err)

    }
  }

useEffect(()=>{
  callPage();
},[]);

  return (
    <div>
      {loginStatus == false && <Loggedout />}
       {role == "user" && <Owner />}
       {role == "admin" && <Admin />}
    </div>
  )
}

export default Home