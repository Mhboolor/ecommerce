import { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Number from '../components/login/Number'
import Otp from '../components/login/Otp'

function Login() {


  const [number  , setNumber] = useState("")

  const mobile = {mobile : number.toString()}
  
  const addUser = async (e) => {
    e.preventDefault()
    const response = await fetch("http://127.0.0.1:1111/auth/get-otp" , {
      method : "POST",
      "Content-Type": "application/json",
      body : JSON.stringify(mobile)
    });
    const data = await response.json();
    console.log(data);
  }


  return (
    <div className='container m-auto px-4 sm:p-0 mb-14'>
        <BreadCrumb prev={"صفحه اصلی"} prevLink={""} here={"ورود"} hereLink={""}/>
        <Number number={number} setNumber={setNumber} addUser={addUser}/>
        <Otp/>
    </div>
  )
}

export default Login