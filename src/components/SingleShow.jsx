import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { UseShow } from '../context/ShowContext';
import { AiFillStar } from 'react-icons/ai';
import TicketsModal from './TicketsModal';

function SingleShow() {
  const { showId } = useParams();
  const { shows: initialShows } = UseShow();

  const [currentShow, setCurrentShow] = useState(null); 
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const foundShow = initialShows.find(item => item.show.id === parseInt(showId));
    setCurrentShow(foundShow);
  }, [initialShows, showId]);

  if (!currentShow) {
    return <div>Loading...</div>;
  }
  const summary = { __html: currentShow.show.summary }
  return (
    <div className='flex-col md:flex-row flex gap-4 m-8 p-4 items-center justify-center border-[#29b9f0ff] border-2 rounded-xl'>
      {console.log(currentShow)}
      <div className='w-4/4 lg:w-1/4 flex items-center justify-center'>
        <img  alt="show" className="h-[60vh] rounded-xl"src={currentShow.show.image?.original ?? "https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg"} />
      </div>
      <div className='w-3/4 text-left flex-col flex gap-1'>
        <div className='font-bold text-3xl'>{currentShow.show.name}</div>
        <div>
        <div className='text-left'><b>Runtime:</b> {currentShow.show.runtime ?? 60} mins</div>
        <div className='flex items-center justify-start gap-1'><b>Rating:</b> {currentShow.show.rating.average ?? 7.5} <AiFillStar className='text-yellow-300 text-xl' /> </div>
        </div>
        <div className='flex gap-2 items-center'><b>Genres:</b>{currentShow.show.genres.map(item => <div key={item} className='bg-[#29b9f0ff] p-2 text-sm text-white rounded-xl'>{item}</div>
        )}</div>
        <div><b>Timings: </b>{currentShow.show.schedule.time===""?"20:00":currentShow.show.schedule.time} on {currentShow.show.schedule.days.length>0?currentShow.show.schedule.days.map(item=><span>{item}</span>):"Monday"}</div>
        <div><b>Summary:</b>
        <div dangerouslySetInnerHTML={summary}>
        </div>
        </div>
        <NavLink to={`${currentShow.show.url}`}><button className='bg-[#29b9f0ff] p-2 text-white font-bold rounded-xl m-2 w-[100%]'>View Website</button></NavLink>
        <button className='bg-[#29b9f0ff] p-2 text-white font-bold rounded-xl m-2 w-[100%]' onClick={()=>setShowModal(true)}>Book Tickets</button>
      </div>
      {
        showModal && <TicketsModal setShowModal={setShowModal} show={currentShow}/>
      }
    </div>
  )
}

export default SingleShow