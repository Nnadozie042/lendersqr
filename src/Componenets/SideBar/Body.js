import  React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Link}from 'react-router-dom'
const Body=()=>{
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const handleSubmit=(e)=>{
      e.preventDefault()
    }
    const handleClick=()=>{
      navigate("/User")
    }
    return(
      <div className="">
        
        <div className="">
       <div className="relative ml-[2em] mt-[6em] h-[15em] w-[10em]  md:ml-[18em] md:text-xl md:space-y-[4em]">
       <div className="space-y-[1em]">
       <p className=' text-blue-900 text-[1.5em] font-extrabold'>welcome!</p>
       <p className="text-blue-300 text-[1.1em] whitespace-nowrap">Enter details to login</p>
        </div>
       
       <form onSubmit={handleSubmit}>
       <div className="mt-[0.8em] space-y-[1.5em]">
        <div className="relative text-gray-400 ">
        <input type="text"className="text-gray-800 font-light pl-[0.5em] bg-gray-200 w-[18em] h-[2em] border-gray-100 "
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email"/>
       </div> 
   
       
        <div>
        <input type="Email"className="text-gray-800 pl-[0.5em] font-light bg-gray-200 w-[18em] h-[2em]"
        value={Password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"/>
        </div>
  
        <div className="mt-[2em]">
          <Link to="/user">
            <button  onClick={handleClick} className="w-[18em] h-[2em] bg-blue-300 text-white rounded">
              LOG IN
  
            </button>
          </Link>
        </div>
        <div className=" text-[0.8em] text-blue-600">
        <Link to="#">FORGOT PASSWORD?</Link>
        </div >
      
        </div>
       </form>
       </div>
       </div>
      
      </div>
    )
  }
export default Body;