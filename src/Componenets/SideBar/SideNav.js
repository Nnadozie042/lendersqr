import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome,FaBriefcase,FaUserFriends,FaHandshake,FaUsers,  FaPiggyBank, 
FaHandHoldingUsd, FaQrcode ,FaUserCog,FaCoins,FaBars,FaUserCheck,FaTimes} 
from 'react-icons/fa';
import { AiFillBank } from "react-icons/ai";


const SideBar=({children})=>{
    const [nav,setNav]=useState(true)
       const menuItem=[
       {
        path:"/",
        name:"switch organisation ",
        icon:<FaBriefcase/>
        }, 
        {
        path:"/Dasboard",
        name:"Dashboard",
        icon:<FaHome />
        },
        {
        title:"CUSTOMERS",
        
        },

        {
        path:"/User",
        name:"Users",
        icon:<FaUserFriends />

       },
       {
       path:'/Guarantors',
       name:"Guarantors",
       icon:<FaUsers/>
       },
       {
       path:'/Loans',
       name:"Loans",
       icon:<FaUserCheck/>
       },
       {
       path:'/Decision',
       name:"Decision model",
       icon:<FaHandshake/>
       },
       {
       path:'/Savings',
       name:"Savings",
       icon:< FaPiggyBank/>
       },
       {
       path:'/Request',
       name:"Loan request",
       icon:<FaHandHoldingUsd/>
       },
       {
       path:"/WhiteList",
       name:"WhiteList",
       icon:<FaUserCheck/>
       }, 
       {
       path:"/Karma",
       name:"Karma",
       icon:<FaUserCheck/>
       } ,
       {
        
        title:"BUSINESS",
    
        },
       {
       path:"/Organsiation",
       name:"Organsiation",
       icon:<FaBriefcase/>
       },
       {
       path:"/Product",
       name:"Loan Product",
       icon:<FaHandHoldingUsd/>
       },
       {
       path:"Save/",
       name:"Savings Products",
       icon:<FaUserCheck/>
       },
       {
        path:"Fees/",
        name:"Fees and Charges",
        icon:<FaCoins/>
       },
       {
        path:"/Transaction",
        name:"Transaction on",
        icon:<FaQrcode style={{color:'lightblue'}}/>
       }
       ,
       {
        path:"/Service",
        name:"Service Account",
        icon:<FaUserCog />
       },
       {
        path:"/Settlement",
        name:"Settlement",
        icon:<FaQrcode style={{color:'lightblue'}}/>
       },
       {
        path:"/Reports",
        name:"Reports",
        icon:<FaQrcode/>
       },
       {
        
        title:"SETTING",
    
        },
       {
        path:"/Preference",
        name:"Preference",
        icon:<AiFillBank/>
       },
       {
        path:"/Pricing",
        name:"pricing",
        icon:<FaQrcode/>
       },
       {
        path:"/Audit",
        name:"Audit Logs ",
        icon:<FaQrcode />
       }

      ]
    return(
        <div className='h-full pt-[0.1em]'>
        <div className="absolute lg:hidden"
        onClick={()=>setNav(!nav)}>
       {nav?(<FaTimes className=""/>):(<FaBars/>)}
         </div>  
        <div className="h-full">  
        { nav &&(<div  className=" bg-white w-[9em]">
                 <div className="pt-[2em] space-y-[2em] ml-[0.3em]">{menuItem.map((item,index)=>(
                    <NavLink to={item.path} key ={index} className=" flex flex-row  hover:bg-slate-100 hover:h-[2em] "activeClassName="active">
                        <div  className="icon pt-[0.4em] text-[0.6em] text-slate-400 ">{item.icon}</div>
                        <div  className="icon  text-[0.8em] text-blue-900 ">{item.title}</div>
                        <div className="name ml-[2em] text-[0.6em] text-blue-600 ">{item.name}</div>
                    </NavLink>
               ))}
                </div>
                </div>
                )}
        <main>{children}</main>
    </div>
    </div>
    )
}
export default SideBar;