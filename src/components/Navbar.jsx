import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from "react-router-dom";
export default function Navbar() {
    const [show,setshow]=useState(false);
    const [active,setactive]=useState('home');
    return(
        <section className="w-full h-auto flex justify-between bg-[#0F172A] px-4 md:px-10 py-4 fixed top-0 left-0 shadow-md z-50">
            <h1 className="font-bold text-white md:text-xl">Task<span className="text-[#3b82f6]">Flow</span></h1>
<button  className="z-50 md:hidden" onClick={()=>{setshow(!show)}}     aria-label="Toggle menu"
          aria-expanded={show}>
{
    show ? (  <CloseIcon className="text-4xl text-[#3b82f6] cursor-pointer" /> ): 
   ( <MenuIcon className="text-4xl text-[#3b82f6] cursor-pointer" />)
}
</button>

{/* Menu Links */}
<div className={`fixed top-0 right-0 z-40 flex flex-col h-full  w-3/5 space-y-6 p-2   md:static md:flex md:flex-row md:space-x-6 md:space-y-0 md:w-auto md:bg-none md:translate-x-0 bg-[#0F172A] transform transition-transform ease-in-out duration-300  ${show ? "translate-x-0" : "translate-x-full"} `}>
{['Home','Features','How it works','Who is it for','Why choose us','Contact'].map(link => {
  const id = link.toLowerCase().replace(/\s+/g, '-');

  return (
    <a
      key={link}
      href={`#${id}`}
      onClick={() => {
        setshow(false);
        setactive(id);
      }}
      className={`font-semibold transition ${
        active === id
          ? 'text-[#3b82f6] border-b-2 border-[#3b82f6]'
          : 'text-white hover:text-[#3b82f6]'
      }`}
    >
      {link}
    </a>
  );
})}

<Link to="/login">
<button className="w-auto h-auto bg-[#3b82f6] text-white px-3 py-1 rounded-full font-semibold hover:bg-[#22C55E] hover:scale-105 hover:shadow-md transition duration-300">Get Started</button>
</Link>
</div>
        </section>
    )
    
}