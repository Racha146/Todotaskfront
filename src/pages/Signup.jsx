import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
const [username,seusername]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [cnfrmpass,setcnfrmpass]=useState("");
  const [differentpass,setdifferentpass]=useState("");
  const navigate = useNavigate();
  const isDisabled =
  username === "" ||
  email === "" ||
  password === "" ||
  cnfrmpass === "" ||
  passwordErrors.length > 0 ||
  password !== cnfrmpass;

  const API_URL = "https://todotaskback-production.up.railway.app";
  const validatePassword = (password) => {
    const errors = [];
  
    if (password.length < 8) {
      errors.push("At least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("One uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("One lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("One number");
    }
  
    return errors;
  };
  const confirmPassword = (password, confirm) => {
    if (confirm !== "") {
      if (password !== confirm) {
        setdifferentpass("Passwords do not match");
      } else {
        setdifferentpass("");
      }
    }
  };
  
  const handlsingup = async (e) => {
    e.preventDefault();
  
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
  
    const data = await res.json();
    console.log(data);
  
    if (data.success) {
      navigate("/dashboard");
    }
  };
    return (
      <div className="flex items-center justify-center h-screen bg-[#0F172A]">
   <form
  onSubmit={handlsingup}
  className="flex flex-col items-center justify-center text-center w-80 h-auto px-6 py-8 rounded-xl bg-[#F8FAFC] mx-5"
>

<h1 className="mx-4 font-bold text-gray-800">Create your account
</h1>
<label className="sr-only">User Name</label>
<input type="text" value={username} placeholder="UserName" onChange={(e)=>{seusername(e.target.value)}}   className="w-full px-3 py-2 mt-3 h-auto border border-gray-300 rounded-md text-gray-800
  focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />



<label className="sr-only">Email</label>
<input
value={email}
  type="email"
  placeholder="Email"
  onChange={(e) =>setemail(e.target.value)}
  
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
    setPasswordErrors(validatePassword(value));
    setdifferentpass("");
    confirmPassword(value,cnfrmpass);
  
  }}
  className="w-full px-3 py-2 mt-3 border border-gray-300 rounded-md text-gray-800
  focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
/>
<div>
{password &&passwordErrors.length > 0 && (
  <ul className="mt-2 text-sm text-left text-red-500">
    {passwordErrors.map((err, index) => (
      <li key={index}>• {err}</li>
    ))}
  </ul>
)}
</div>
<input type="password" value={cnfrmpass} placeholder="Confirm password" onChange={(e)=>{ const value=e.target.value ;setcnfrmpass(value);confirmPassword(password,value)}}  className="w-full px-3 py-2 mt-3 border border-gray-300 rounded-md text-gray-800
  focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"  />
<div >
{cnfrmpass && differentpass && (
  <div className="mt-2 text-sm text-left text-red-500">
    {differentpass}
  </div>
)}


</div>


<button
type="submit"
  disabled={isDisabled}
  className={`font-semibold w-64 rounded-md py-1 mt-4 transition duration-300
    ${isDisabled
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#3B82F6] text-white hover:bg-[#2455a4] hover:scale-105"
    }`}
>
  Sign Up
</button>

<hr className="text-black" />

<div className="flex justify-center mt-5">
  <h1 className="text-gray-800"> have an account?</h1>
  <Link
  to="/login"
  className="text-[#22C55E] font-semibold underline underline-offset-1 decoration-[#22C55E] ml-1 hover:font-bold transition-all cursor-pointer"
>
  Log in
</Link>

</div>

       </form>
      </div>
    )
  }
  