import { useState, useEffect } from "react";
import TripForm from "../components/TripForm";
import TripSuggestion from "../components/TripSuggestion";
import styled from "styled-components";

const Div = styled.div`
    text-align: center;
    margin-top: 20px;
    padding: 5px;
`

function TripPlanner(){
    const [trip, setTrip] = useState([])
    const [selectedTrip, setSelectedTrip] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:8001/trips/${selectedTrip}`)
            .then(resp => resp.json())
            .then(data => setTrip(data))
    }, [selectedTrip])

    function selectTrip(tripNum){
        setSelectedTrip(parseInt(tripNum))
    }

    return(
        <main>
            <h2>Trip Planner</h2>
            <TripForm onSubmitForm={selectTrip}/>
            {selectedTrip === 0? 
                (<Div>
                    <h3>Make selections from the menus above to see a recommended National Park to visit along with suggested activities</h3> 
                    <p>Do you spend your days dreaming of your next National Park trip? So do we! We hope these suggestions will inspire and guide your next adventure into the beauty of the great outdoors! Suggestions are based on the season in which you plan to travel and your preferred outdoor activity. Each suggestion contains a link to the website for the National Park suggested, so that you can further explore the vast potential of a National Park visit.</p>
                </Div>):
                <TripSuggestion suggestedTrip={trip}/>}
        </main>
    )
}

export default TripPlanner