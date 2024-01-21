import { useState, useEffect} from "react"
import { Image } from 'semantic-ui-react'
import ParkImage from "./ParkImage"

function ImageGallery(){
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/images")
            .then(resp => resp.json())
            .then(data => setImages(data))
    }, [])

    const imageDisplay = images.map(image => 
        <ParkImage key={image.id} image={image}/>)

    const photoCredits = images.map(image => image.credit)
    
    return(
        <>
            <Image.Group size="medium">{imageDisplay}</Image.Group>
            <p>Photo credit starting top left: {photoCredits.join(", ")}</p>
        </>
    )
}

export default ImageGallery