import { Link } from "react-router-dom"
import { Card, Image } from "semantic-ui-react"

function ParkCard({ park }){

    if(!park){
        return <h1>Loading...</h1>
    }
    return(
        <Card>
            <Image height="119px" src={park.images[0].url}/>
            <Card.Content>
                <Card.Header>{park.fullName}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/parks/${park.id}`}>View Park</Link>
            </Card.Content>
        </Card>
    )
}

export default ParkCard