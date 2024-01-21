import { Link } from "react-router-dom"

function ParkCard({ park }){

    if(!park){
        return <h1>Loading...</h1>
    }

    //renders a semantic UI card with an image and the park's name
    //clicking the card will route to the ParkDetails page
    return(
        <>
            <p>{park.fullName}</p>
            <Link to={`/parks/${park.id}`}>View Park</Link>
        </>
    )
}

export default ParkCard