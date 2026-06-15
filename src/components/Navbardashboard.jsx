
import { useNavigate } from "react-router-dom";


export default function Navbardashboard(){
    const navigate = useNavigate();

    const handleLogout = () => {
    
      localStorage.removeItem("token");
    
      navigate("/login");
    
    };
    return(
<div className="w-full h-auto flex justify-between bg-[#0F172A] px-4 md:px-10 py-4 fixed top-0 left-0 shadow-md z-50">
<h1 className="font-bold text-white md:text-xl">Task<span className="text-[#3b82f6]">Flow</span></h1>

<button className="w-auto h-auto bg-[#3b82f6] text-white px-3 py-1 rounded-full font-semibold hover:bg-[#22C55E] hover:scale-105 hover:shadow-md transition duration-300" onClick={handleLogout}>Log out</button>


</div>


    )
}