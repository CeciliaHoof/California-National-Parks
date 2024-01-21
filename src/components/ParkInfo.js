function ParkInfo({ park }){
    return(
        <>
            <h2>{park.fullName}</h2>
            <p>{park.description}</p>
            <h3>Operating Hours</h3>
                <p>{park.operatingHours}</p>
            <h3>Entrance Fee</h3>
                {park.entranceFee === 0 ?
                <p>Entrance to this park is free.</p> :
                <p>{`$${park.entranceFee}`}</p>}
            <h3>Activities</h3>
            <p>{park.activities.join(", ")}</p>
            <h3>Park Wildlife</h3>
            <p>{park.wildlife.join(", ")}</p>
            <h3>Weather Information</h3>
            <p>{park.weatherInfo}</p>
            <a href={park.url}>Visit the NPS Website for more information.</a>
        </>
    )
}

export default ParkInfo