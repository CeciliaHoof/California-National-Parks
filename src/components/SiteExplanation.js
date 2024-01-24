import { Segment } from "semantic-ui-react"

function SiteExplanation(){
    return(
        <Segment.Group horizontal>
            <Segment>
                <h3>Explore Nature's Masterpieces</h3>
                <p>Discover detailed information about each national park, from towering redwoods and majestic mountains to expansive deserts and pristine coastlines. Whether you're an avid hiker, wildlife enthusiast, or simply seeking tranquility, our guides provide insights into the activities each park offers.</p>
            </Segment>
            <Segment>
                <h3>Share Your Experience</h3>
                <p>Become a part of our community by leaving reviews and sharing your experiences at each national park. Your insights and recommendations contribute to a vibrant community of nature enthusiasts, helping fellow explorers make the most of their visits.</p>
            </Segment>
            <Segment>
                <h3>Plan Your Adventure</h3>
                <p>Get trip suggestions according to the season of your travels and your preferred outdoor activities. Whether it's the vibrant colors of fall foliage, the snowy landscapes of winter, or the blossoming beauty of spring, each season offers a unique perspective of California's National Parks.</p>
            </Segment>
        </Segment.Group>
    )
}

export default SiteExplanation