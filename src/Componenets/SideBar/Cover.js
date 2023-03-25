import React, { useEffect, useState } from 'react';
import NavBar from '../nav/navBar';
import SideNav from './SideNav';
import { useParams } from 'react-router-dom';
import { FaStarOfLife, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'

const Cover = () => {
    const [user, setUser] = useState([])

    const routeParams = useParams();
    const fetchData = () => {
        fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${routeParams.id}`)
            .then(response => {
                return response.json()
            })

            .then(data => {
                setUser(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="bg-slate-200 w-full h-full">
            <NavBar />
            <SideNav />
            <div className="absolute top-0 mt-[5em]">
                <div className="ml-[5em]">
                    <div className="flex flex-row whitespace-nowrap ml-[1em]">
                        <div className="text-blue-800 text-[0.7em pl-[9em]">user Details</div>
                        <div className="flex flex-row ml-[28em]">
                            <div className="" ><button className="text-[0.4em] border-style text-red-400 border-solid border-[0.2em] 
                            border-red-400 w-[12em] h-[3em]
                          rouded-[0.3em] "> BLACK LIST</button></div>
                            <div className="ml-[1em]"><button className=" text-[0.4em] border-style text-green-400 border-solid 
                            border-[0.2em] border-green-400  h-[3em] w-[15em]">ACTIVATE USER</button></div>
                        </div>

                    </div>

                    <div className="h-[10em] w-[45em] bg-white ml-[10em] ">
                        <div className=' flex flex-row pt-[2em] ml-[1.5em] '>
                            <div className="h-[4em] w-[4em] rounded-full bg-gray-500 pl-[1.5em] pt-[1.2em] "><span className='pt-[5em]'><FaUser
                            className='text-gray-200' /></span></div>
                            <div className='flex flex-row'>

                           < table className="pL-[4em]">
                                    <thead className="">
                                        <tr className="text-[0.5em] ">
                                            <th></th>
                                       
                                        </tr>
                                    </thead>
                                    <tbody className=" ">
                                        <tr className="text-[0.5em] whitespace-nowrap">
                                            <td className="px-8">{user?.profile?.firstName} {user?.profile?.lastName}</td>
                                       
                                        </tr>

                                    </tbody >
                             </table>
                              </div>

                              <div className="flex flex-row text-yellow-200 pt-[2em]">
                             <div className=""><FaStarOfLife className='yellow  text-[0.7em]'/></div>
                             <div className=""><FaStarOfLife className='yellow  text-[0.7em] '/></div>
                             <div className=""><FaStarOfLife className='yellow text-[0.7em]'/></div>
                             <div className=""><FaStarOfLife className='yellow text-[0.7em]'/></div>
                             <div className=""><FaStarOfLife className='yellow text-[0.7em]'/></div>
                            </div>
                            
                        </div>
                        <div className="ml-[4em] flex flex-row pt-[4em] text-[0.5em] space-x-[5em]">
                            <NavLink to=""activeclassName="text-green-400">General Details</NavLink>
                            <NavLink>Document</NavLink>
                            <NavLink>Bank  Details</NavLink>
                            <NavLink>Loans</NavLink>
                            <NavLink>Savings</NavLink>
                            <NavLink>Loans</NavLink>
                            <NavLink>App and systems</NavLink>
                        </div>

                    </div>
                    <div className="h-[40em] w-[45em] bg-white ml-[10em] mt-[1em]">
                        <div>
                            <p className="pl-[8em] text-[0.5em] text-gray-800">Personal information</p>
                            <div className="pt-[1em] pl-[2em]">
                                <table className="pL-[4em]">
                                    <thead className="">
                                        <tr className="text-[0.5em] ">
                                            <th>fULLname</th>
                                            <th className='px-8'>Phone Number</th>
                                            <th className="px-8">Email Address</th>
                                            <th className="px-8">BvN</th>
                                            <th className="px-8">Gender</th>
                                        </tr>
                                    </thead>
                                    <tbody className=" ">
                                        <tr className="text-[0.5em] whitespace-nowrap">
                                            <td className="px-8">{user?.profile?.firstName} {user?.profile?.lastName}</td>
                                            <td className="px-8">{user?.profile?.phoneNumber}</td>
                                            <td className='px-8'>{user?.email} </td>
                                            <td className="px-8">{user?.profile?.bvn} </td>
                                            <td className="px-8">{user?.profile?.gender}</td>
                                        </tr>

                                    </tbody>


                                </table>
                            </div>
                           < div className="mt-[2em] pl-[3.7em]">
                            <table className="pL-[3]">
                             <thead className="">
                                <tr className="text-[0.5em] ">
                                    <th>MARITAL STATUS</th>
                                    <th className='px-8'>CHILDREN</th>
                                    <th className="px-8">TYPE OF RESIDENCE</th>
                                    
                                    </tr>
                                    </thead>
                                    <tbody className=" ">
                                        <tr className="text-[0.5em] whitespace-nowrap">
                                            <td className="px-8">single</td>
                                            <td className="px-8">None</td>
                                            <td className='px-8'>Parents-apartment</td>
                                           
                                        </tr>

                                    </tbody>


                            </table>
                            </div>
                            < div className="mt-[2em] pl-[4em]">
                                <p className="text-[0.6em]">Educational and Background</p>
                                <div className="pt-[1em]">
                            <table className="pt-[3em] pL-[3]">
                             <thead className="">
                                <tr className="text-[0.4em] ">
                                    <th>lLEVEL OF EDUCATION</th>
                                    <th className='px-8'>EMPLOYMENT STATUS</th>
                                    <th className="px-8">SECTOR OF EMPLOYMENT</th>
                                    <th className='px-8'>Duration of Employment</th>
                                     </tr>
                                    </thead>
                                    <tbody className=" ">
                                        <tr className="text-[0.5em] whitespace-nowrap">
                                            <td className="px-8">{user?.Education?.level}</td>
                                            <td className="px-8">{user?.education?.employmentStatus}</td>
                                            <td className='px-8'>{user?.education?.sector}</td>
                                            <td className='px-8'>{user?.education?.duration}</td>
                                           
                                        </tr>

                                    </tbody>


                            </table>
                            </div>
                            </div>

                            < div className="mt-[2em] pl-[4em]">
                                <p className="text-[0.6em]">Educational and Background</p>
                            <table className="pL-[3]">
                             <thead className="">
                                <tr className="text-[0.5em] ">
                                    <th className='px-8'>OFFICE EMAIL</th>
                                    <th className="px-8">MONTHLY INCOME</th>
                                    <th className='px-8'>LOAN DEPARTMENT</th>
                                     </tr>
                                    </thead>
                                    <tbody className=" ">
                                        <tr className="text-[0.5em] whitespace-nowrap">
                                            <td className="px-8">B.sc</td>
                                            <td className="px-8">Emloyed</td>
                                            <td className='px-8'>4000</td>
                                          
                                           
                                        </tr>

                                    </tbody>


                            </table>
                            </div>

                            < div className="mt-[2em] pl-[4em]">
                                <p className="text-[0.6em]">Socials</p>
                            <table className="pL-[3]">
                             <thead className="">
                                <tr className="text-[0.5em] ">
                                    <th className='px-8'>TWITTER</th>
                                    <th className="px-8">FACEBOOK</th>
                                    <th className='px-8'>INTAGRAM</th>
                                     </tr>
                                    </thead>
                                    <tbody className=" ">
                                        <tr className="text-[0.5em] whitespace-nowrap">
                                            <td className="px-8">{user?.socials?.twitter}</td>
                                            <td className="px-8">{user?.socials?.facebook} </td>
                                            <td className='px-8'>{user?.socials?.instagram}</td>
                                          
                                           
                                        </tr>

                                    </tbody>
                             </table>
                            </div>
                            < div className="mt-[2em] pl-[4em]">
                                <p className="text-[0.6em]">Guarantors</p>
                            <table className="pL-[3]">
                             <thead className="">
                                <tr className="text-[0.5em] ">
                                    <th className='px-8'>FULLNAME</th>
                                    <th className="px-8">PHONE NUMBER</th>
                                    <th className='px-8'>EMAIL ADDRESS</th>
                                     </tr>
                                    </thead>
                                    <tbody className=" ">
                                        <tr className="text-[0.5em] whitespace-nowrap">
                                            <td className="px-8">{user?.guarantor?.firstName} {user?.guarantor?.lastName} </td>
                                            <td className="px-8">{user?.guarantor?.phoneNumber} </td>
                                            <td className='px-8'>{user?.guarantor?.email}</td>
                                          
                                           
                                        </tr>

                                    </tbody>


                            </table>
                            </div>



                        </div>
                    </div>

                </div>

            </div>

        </div>


    )
}
export default Cover;