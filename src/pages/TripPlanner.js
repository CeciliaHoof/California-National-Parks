import { useState, useEffect } from "react"
import TripForm from "../components/TripForm"
import TripSuggestion from "../components/TripSuggestion"

function TripPlanner(){
    const [trips, setTrips] = useState([])
    const [selectedTrip, setSelectedTrip] = useState(0)

    useEffect(() => {
        fetch('http://localhost:8001/trips')
            .then(resp => resp.json())
            .then(data => setTrips(data))
    }, [])

    function selectTrip(tripNum){
        setSelectedTrip(parseInt(tripNum))
    }

    const tripPlan = trips.filter(trip => trip.id === selectedTrip)

    return(
        <main>
            <h2>Trip Planner</h2>
            <TripForm onSubmitForm={selectTrip}/>
            <TripSuggestion trip={tripPlan}/>
        </main>
    )
}

export default TripPlanner