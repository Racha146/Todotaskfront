
import homeImg from '../assets/home.svg';
import { Link } from "react-router-dom";
export default function Home() {
    return(
        <section id="home" className="flex flex-col w-full md:py-32 py-24 px-10 space-y-5 md:flex md:flex-row md:space-x-4 md:space-y-0 md:items-start md:justify-start bg-gradient-to-r from-[#0F172A] to-[#1e293b]
 text-center md:text-left ">
            <div className="md:w-1/2">
             <h1 className="text-xl font-bold text-white md:text-2xl "> <span className="text-[#3b82f6]">Manage</span> Your Projects Without Chaos</h1>
             <p className="py-4 text-gray-300">
                TaskFlow helps students 
                and teams stay organized and productive</p>
                <Link to="/login">
                <button className="w-auto px-5 py-2 font-semibold rounded-lg bg-transparent border border-spacing-2 border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-[#0F172A] hover:scale-110 hover:shadow-lg transition duration-300"> Get Started <span className="ml-2">→</span></button>
                </Link>
             </div>
             <div className="flex justify-center md:w-1/2 ">
                <img src={homeImg} alt="Project Mangement" className="object-contain w-40 h-40 md:w-64 md:h-64" />
             </div>
        </section>

    )
    
}