import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [error,seterror]=useState("")
  const navigate=useNavigate();
  const isDisabled =

  email === "" ||
  password === "" 


;
 const API_URL = "https://todotaskback-production.up.railway.app";
const handllogin = async (e) => {
  e.preventDefault();

  const res = await fetch(
    `${API_URL}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );

  const data = await res.json();

  if(data.success){

    localStorage.setItem(
      "token",
      data.token
    );

    navigate("/dashboard");

  } else {

    seterror(data.message);

  }
};

  
return  (
      <div className="flex items-center justify-center h-screen bg-[#0F172A]">
   <form
  onSubmit={handllogin}
  className="flex flex-col items-center justify-center text-center w-80 h-auto px-6 py-8 rounded-xl bg-[#F8FAFC] mx-5"
>

<h1 className="mx-4 font-bold text-gray-800">Login to your Account</h1>
<label className="sr-only">Email</label>
<input
value={email}
  type="email"
  placeholder="Email"
  onChange={(e) =>{setemail(e.target.value);  seterror("");}}
  
  className="w-full px-3 py-2 mt-3 h-auto border border-gray-300 rounded-md text-gray-800
  focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
/>
<label className="sr-only">Password</label>
<input
value={password}
  type="password"
  placeholder="Password"
  onChange={(e) => {
    const value = e.target.value;
    setpassword(value);
    seterror("");


  }}
  className="w-full px-3 py-2 mt-3 border border-gray-300 rounded-md text-gray-800
  focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
/>


<button
type="submit"
  disabled={isDisabled }
  className={`font-semibold w-64 rounded-md py-1 mt-4 transition duration-300
    ${isDisabled 
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#3B82F6] text-white hover:bg-[#2455a4] hover:scale-105"
    }`}
>
  Login
</button>
<div className="mt-2 text-sm text-red-500">
{error && (
  <p >{error}</p>
)}
</div>

<hr className="text-black" />

<div className="flex justify-center mt-5">
  <h1 className="text-gray-800">Don't have an account?</h1>
  <Link
  to="/signup"
  className="text-[#22C55E] font-semibold underline underline-offset-1 decoration-[#22C55E] ml-1 hover:font-bold transition-all cursor-pointer"
>
  Sign Up
</Link>

</div>

       </form>
      </div>
    )
  }
  