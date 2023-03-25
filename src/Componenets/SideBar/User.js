import React, { useState } from 'react';
import SideNav from '../SideBar/SideNav'
import NavBar from '../nav/navBar'
import { FaFile, FaUsers, FaCoins } from 'react-icons/fa'
import DataInput from '../SideBar/DataInput';

const User = () => {
  const [organization, setOrganization] = useState('');
  const [username, setUsername] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="absolute top-0  bg-slate-100 h-[180em] w-full">
      <NavBar />

      <SideNav />

      {/*-----------------desk--------------------*/}
      <div className="absolute top-0 ml-[4em]  h-[50em] w-full">

        <div className="relative mt-[3em]">
          <p className="mt-[5em] ml-[9em] text-blue-600">User</p>
          <div className="relative pl-[4em] flex flex row justify-evenly  space-y-[0.8em] ">
            <div className=" pl-[2em] bg-white h-[6em] w-[10em] rounded-xl mt-[0.8em] space-y-[0.8em]">
              <div className="mt-[0.3em] h-[2em] w-[2em] rounded-full bg-pink-300"><p className="pt-[0.35em] pl-[0.5em]">
                <FaUsers className="text-[1em] text-[#DF18FF]" /></p></div>
              <div className=""><p className="text-[0.6em] text-neutral-800">USERS</p></div>
              <div className=""><p className="text-[0.8em] text-blue-900 ">2,453</p></div>
            </div>


            <div className=" pl-[2em] bg-white h-[6em] w-[10em] rounded-xl space-y-[0.8em]" >
              <div className="mt-[0.3em] h-[2em] w-[2em] rounded-full bg-violet-200"><p className="pt-[0.35em] pl-[0.5em]">
                <FaUsers className="text-violet-700" /></p></div>
              <div className=""><p className="text-[0.6em] text-neutral-700">ACTIVE USERS WITH LOANS</p></div>
              <div className=""><p className="text-[0.8em] text-blue-900">2,453</p></div>
            </div>

            <div className=" pl-[2em] bg-white h-[6em] w-[10em] rounded-xl space-y-[0.8em]" >
              <div className="mt-[0.3em] h-[2em] w-[2em] rounded-full bg-orange-100"><p className="pt-[0.35em] pl-[0.5em]">
                <FaFile className="text-orange-300" /></p></div>
              <div className=""><p className="text-[0.6em] text-neutral-700">USERS WITH LOANS</p></div>
              <div className=""><p className='text-[0.8em] text-blue-900'>12,453</p></div>
            </div>

            <div className=" pl-[2em] bg-white h-[6em] w-[10em] rounded-xl space-y-[0.8em]">
              <div className="mt-[0.3em] h-[2em] w-[2em] bg-red-100 rounded-full "><p className="pt-[0.35em] pl-[0.5em]">
                <FaCoins className="text-red-400" /> </p></div>
              <div className=""><p className="text-neutral-800 text-[0.6em]">USERS WITH SAVING</p></div>
              <div className=""><p className='text-[0.8em] text-blue-900'>102,453</p></div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-[2em]">

          {/*---------------------form---------------------*/}
          <div className="relative text-[0.5em] bg-white h-[50em]  w-[19.8em] ml-[18em] rounded-xl space-y-[5em] pl-[2em] ">
            <form onSubmit={handleSubmit}>
              <div className="pt-[3em] space-y-[2.8em]" >
                <div>
                  <p>Organization:</p>
                  <select className="relative bg-neutral-200 w-[16em] h-[2.5em]" value={organization} onChange={(e) => setOrganization(e.target.value)}>
                    <option value="">--Please choose an organization--</option>
                    <option value="org1">Organization 1</option>
                    <option value="org2">Organization 2</option>
                    <option value="org3">Organization 3</option>
                  </select>

                </div>

                <div>

                  <p>Username:</p>
                  <input className="bg-neutral-200 w-[16em] h-[2.5em]" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />

                </div>
                <div>

                  <p> Date:</p>
                  <input className="bg-neutral-200 w-[16em]  h-[2.5em]" type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />

                </div>

                <div>

                  <p> Email:</p>
                  <input className='bg-neutral-200 w-[16em] h-[2.5em] rounded-[0.3em]' type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

                </div>

                <div>

                  <p>Phone Number:</p>
                  <input className="bg-neutral-200 w-[16em] h-[2.5em] rounded-[0.3em]" type="tel" value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} placeholder="phone number" />

                </div>

                <div>
                  <p> Status:</p>
                  <select className="bg-neutral-200 w-[16em] h-[2.5em]" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">--Please choose a status--</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
                <div className="flex  h-[2em] ">
                  <div>
                    <button className="h-[2.5em] w-[6em] border-solid  bg-gray-50 border-gray-400 rounded-[0.5em]">Reset</button>
                  </div>
                  <div>
                    <button className="bg-blue-400 h-[2.5em] w-[6em] text-white rounded-[0.5em] ml-[3em] color-white ">Filter</button>

                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-white ml-[0.9em] w-[42em]">
            <div className="pl-[0.8em]">
              <DataInput />
            </div>
          </div>
        </div>

      </div>


    </div>

  )
}
export default User;