import { createContext, useContext, useEffect, useState, } from "react"

const ShowContext = createContext();
const UseShow=()=>useContext(ShowContext)

export function ShowProvider({children}) {
    const [shows,setShows]=useState([]);
    const localtickets=localStorage.getItem("tickets");
    const [ticket,setTicket]=useState(JSON.parse(localtickets)??[]);
    
    useEffect(() => {
        localStorage.setItem("tickets", JSON.stringify(ticket));
      }, [ticket]);

    const getData=async()=>{
        try{
            const res=await fetch("https://api.tvmaze.com/search/shows?q=all")
            if(res.status===200)
            {
                setShows(await res.json())
            }
        }
        catch(e)
        {
            console.error(e)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <ShowContext.Provider value={{shows,ticket,setTicket}}>
            {children}
        </ShowContext.Provider>
    )
}
export {UseShow};