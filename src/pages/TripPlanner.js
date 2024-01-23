import { useState } from "react"
import TripForm from "../components/TripForm"
import TripSuggestion from "../components/TripSuggestion"

function TripPlanner(){
    const [selectedTrip, setSelectedTrip] = useState(0)

    function selectTrip(tripNum){
        setSelectedTrip(parseInt(tripNum))
    }

    return(
        <main>
            <h2>Trip Planner</h2>
            <TripForm onSubmitForm={selectTrip}/>
            <TripSuggestion tripId={selectedTrip}/>
        </main>
    )
}

export default TripPlanner