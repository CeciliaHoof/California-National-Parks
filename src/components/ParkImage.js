import { Card, Image } from "semantic-ui-react"

function ParkImage({ image }){
    const {url, altText} = image;

    return (
            <Image src={url} alt={altText} />
    )
}

export default ParkImage