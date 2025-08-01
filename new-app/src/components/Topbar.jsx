import { FaUsersGear } from "react-icons/fa6";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import LogoutButton from "../utils/Logout";


export default function Topbar() {
  const basecss = "cursor-pointer text-2xl";
  return (
    <div className="flex  justify-between">
      <div className="flex items-center p-2 gap-2.5">
        <FaUsersGear className="cursor-pointer text-4xl text-primary" />
        <h1 className="text-3xl text-primary font-bold">HRMS PORTAL</h1>
      </div>
      <div className="flex items-center justify-between text-5xl gap-6 mr-4">
        <FaSearch className="cursor-pointer text-2xl" />
        <FaBell className="cursor-pointer text-2xl"/>
        <FaUser className="cursor-pointer text-2xl"/>
        <LogoutButton />
      </div>
    </div>
  );
}