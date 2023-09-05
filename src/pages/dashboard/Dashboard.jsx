import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/dashboard/header/Header";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import { useState } from "react";

function Dashboard() {
  const { role, isLogin } = useSelector((state) => state.login);
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  // if (role === "ADMIN" && isLogin) {
  return (
    <div className="flex flex-col bg-[#fff]">
      <Header ShowMenuHandler={ShowMenuHandler} showMenu={showMenu} />
      <div className="flex relative">
        <Sidebar showMenu={showMenu} />
        <div className="p-5 flex flex-col flex-1 w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  );
  // } else {
  //   return (
  //     <div className="flex items-center justify-center flex-col gap-5 w-full h-screen">
  //       <img
  //         src="./images/dashboard/error/401.png"
  //         alt="error_401"
  //         className="rounded-full w-48 h-48"
  //       />
  //       <p className="text-lg">
  //         دسترسی شما امکان پذیر نمیباشد لطفا وارد شوید !
  //       </p>
  //       <Link to={"login"} className="bg-success rounded-md py-1 px-5 text-lg">
  //         ورود
  //       </Link>
  //     </div>
  //   );
  // }
}

export default Dashboard;
