import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ParkCard from "../components/ParkCard"
import { Card } from "semantic-ui-react";

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
            <h2>Welcome to the Parks!</h2>
            <p>Click "View Park" to view Park details and read reviews</p>
            <Card.Group itemsPerRow={8}>
                <ParkCard park = {parks[0]}/>
                <ParkCard park = {parks[0]}/>
                <ParkCard park = {parks[0]}/>
                <ParkCard park = {parks[0]}/>
                <ParkCard park = {parks[0]}/>
                <ParkCard park = {parks[0]}/>
                <ParkCard park = {parks[0]}/>
                <ParkCard park = {parks[0]}/>
            </Card.Group> 
            <Outlet context={parks}/>
            
        </main>
    )
}

export default Parks