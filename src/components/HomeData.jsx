import React from 'react'
import { UseShow } from '../context/ShowContext'
import { AiFillStar } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function HomeData() {
    const { shows } = UseShow();
    return (
        <div>
            <div className='flex flex-wrap gap-4 m-4 items-center justify-center'>
                {
                shows.map(item => {
                        const { show } = item
                        return (
                            <div className='w-1/8 border-2 border-[#29b9f0ff] rounded-xl'>
                                <img alt="show" className='h-[18rem] w-[15rem] rounded-t-xl' src={show.image?.medium ?? "https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg"} />
                                <div className='text-left px-4 py-2 text-xl'>{show.name}</div>
                                <div className='flex gap-2 px-4'>{show.genres.map(item => <div className='bg-[#29b9f0ff] p-2 text-sm text-white rounded-xl'>{item}</div>
                                )}</div>
                                <div className='text-left px-4'>Runtime: {show.runtime ?? 60} mins</div>
                                <div className='flex items-center justify-start gap-1 px-4'>Rating: {show.rating.average ?? 7.5} <AiFillStar className='text-yellow-300 text-xl' /> </div>
                                <NavLink to={`/${show.id}`}><button className='bg-[#29b9f0ff] p-2 text-white font-bold rounded-xl m-2 w-[90%]'>View Details</button></NavLink>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default HomeData