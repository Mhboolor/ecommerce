import BreadCrumb from '../components/BreadCrumb'
import Number from '../components/login/Number'
import Otp from '../components/login/Otp'

function Login() {


  return (
    <div className='container m-auto px-4 sm:p-0 mb-14'>
        <BreadCrumb prev={"صفحه اصلی"} prevLink={""} here={"ورود"} hereLink={""}/>
        <Number/>
        <Otp/>
    </div>
  )
}

export default Login