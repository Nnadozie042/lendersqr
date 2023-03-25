import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaEllipsisV, FaRegEye,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OutsideClickHandler from "react-outside-click-handler";


const DataInput = () => {
  const [users, setUsers] = useState([])
  // const [show, setShow] = useState(true)

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = users.slice(startIndex, endIndex);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const fetchData = () => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then(response => {
        return response.json()
      })

      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function goToPreviousPage() {
    setCurrentPage(currentPage - 1);
  }
  function goToPage(page) {
    setCurrentPage(page);
  }
  function goToNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function showData(id){
    const details = document.querySelectorAll('.detailsData');
    console.log(details)
    document.querySelectorAll('.detailsData').forEach((selected) => {
      selected.classList.add('hidden')
    })
    document.getElementById(`data${id}`).classList.remove('hidden')
  }
  function hideDropDowns(){
    document.querySelectorAll('.detailsData').forEach((selected) => {
      selected.classList.add('hidden')
    })
  }




  return (
    <div className="relative mt-[2em] ">
      <table className=' min-w-full'>
        <thead className="">
          <tr className="text-xl text-neutral-600">
            <th className="text-[0.3em]"><p>ORGANISATION</p></th>
            <th className="text-[0.3em]"><p>USERNAME</p></th>
            <th className="text-[0.3em]"><p>EMAIL</p></th>
            <th className="text-[0.3em]"><p>PHONE NUMBER</p></th>
            <th className=" text-[0.3em]"><p>DATE JOINED</p></th>
            <th className=" text-[0.3em]"><p>STATUS</p></th>
          </tr>
        </thead>

        <tbody>

          {currentData.map((user) => (

            <tr className="text-[0.5em] text-neutral-600  " key={user.id} >
              <td className="">{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td >{user.phoneNumber}</td>
              <td>{user.lastActiveDate}</td>
              <td className="py-[2em]  px-[6em]  ">
                
                <FaEllipsisV onClick={() => showData(user.id)} />

                <div className="hidden detailsData whitespace-nowrap space-y-[3em]" id={`data${user.id}`}>
                <OutsideClickHandler onOutsideClick={() => {hideDropDowns()}}>
                  <Link to={`/userDetails/${user.id}`}>
                    <div className="absolute bg-white h-[8
                      em] w-[12em] bg-gray-300 rounded-[0.2em] pl-[3em]  pt-[0.4em] space-y-[1em] ml-[-6em]">
                    <div className="flex flex-row"><FaRegEye className="text-[1em] mr-[0.4em] mt-[0.22em]" /> View detals</div>
                     <div className="flex flex-row"><FaUser className="text-[1em] mr-[0.4em] mt-[0.22em] "/> Blacklist user</div>
                     <div className="flex flex-row"> <FaUser className='text-[1em] mr-[0.4em] mt-[0.22em]'/> Active users</div>
                
                    </div>
                    </Link>
                    </OutsideClickHandler>
                </div>


              </td>
            </tr>

          )
          )
          }
        </tbody>
      </table>
      <div className='absolute flex flex-row ml-[42em] text-[0.7em] text-gray-400  pt-[2em]'><button onClick={goToPreviousPage} disabled={currentPage === 1}>
        <FaChevronLeft className="text-gray-400" />
      </button>
        <div>
          {Array.from({ length: pageCount }, (_, index) => (
            <button className="space-x-[20em]" key={index} onClick={() => goToPage(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>

        <button onClick={goToNextPage} disabled={endIndex >= users.length}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default DataInput;