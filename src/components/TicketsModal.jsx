import React, { useState } from 'react'
import { UseShow } from '../context/ShowContext';

function TicketsModal({show,setShowModal}) {
    const [details,setDetails]=useState({name:"",email:"",tickets:0});
    const {ticket,setTicket}=UseShow();
    const handleBooking=()=>{
        setDetails({...details,movieName:show.show.name,schedule:show.show.schedule})
        if(details.name==="")
        {
            alert("Enter a valid Name")
        }
        if(details.name!==""&&details.email==="")
        {
            alert("Enter a valid Email")
        }
        if(details.name!==""&&details.email!==""&&details.tickets===0)
        {
            alert("Select No. of Seats")
        }
        if(details.name!==""&&details.email!==""&&details.tickets!==0)
        {
        setTicket([...ticket,details])
        setShowModal(false);
        alert("Ticket Booked")
        }
        
    }
  return (
    <div>
         <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
                <div className="bg-white p-4 w-3/4 md:w-2/4">
                    <div className='flex items-center justify-between'>
                        <div className='font-bold text-3xl'> Book Tickets</div>
                    <button
                        className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold"
                        onClick={() => setShowModal(false)}
                    >
                        X
                    </button>
                    </div>
                    <div className="bg-white flex flex-col items-center p-2 gap-4 justify-center">
                        <label className='font-bold text-2xl'>
                        {show.show.name}</label>
                        <label><b>Timings: </b>{show.show.schedule.time===""?"20:00":show.show.schedule.time} on {show.show.schedule.days.length>0?show.show.schedule.days.map(item=><span>{item}</span>):"Monday"}</label>
                        <label className='flex flex-col items-start'>Name: 
                            <input
                            className="border-2 w-fit border-black rounded p-2" placeholder='Name' onChange={(e)=>setDetails({...details,name:e.target.value})}
                        /></label>
                        <label className='flex flex-col items-start' onChange={(e)=>setDetails({...details,email:e.target.value})}> Email:
                         <input
                            className="border-2 w-fit border-black rounded p-2" placeholder='Email' required
                        /></label>
                        <label>No of seats:
                        <select className="border-2 w-full border-black rounded p-2" onChange={(e)=>setDetails({...details,tickets:e.target.value})}> 
                            <option value={0}>Select</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                        </select>
                        </label>
                        <button
                            className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold" onClick={()=>handleBooking()}
                        >
                            Book Tickets
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TicketsModal