import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ParkCard from "../components/ParkCard"

function Parks(){
    const [parks, setParks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:8001/parks')
            .then(resp => resp.json())
            .then(data => setParks(data))
    }, [])
    //fetches /parks from server and renders a ParkCard for each park
    return(
        <main>
            <h2>Here are the Parks!</h2> 
            <ParkCard park = {parks[0]}/>
            <Outlet context={parks}/>
            
        </main>
    )
}

export default Parks