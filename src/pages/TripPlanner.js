import { useState, useEffect } from "react"
import TripForm from "../components/TripForm"
import TripSuggestion from "../components/TripSuggestion"

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
                <h3>Make selections from the menus above to see a recommended National Park to visit along with suggested activities</h3> :
                <TripSuggestion tripSuggestion={trip}/>}
        </main>
    )
}

export default TripPlanner