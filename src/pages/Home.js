import ImageGallery from "../components/ImageGallery"


function Home(){
    //fetches /images from server and renders them with Image Gallery
    return(
        <main>
            <h2>Welcome to Our Guide to California's National Parks!</h2>
            <p>Embark on a journey through the breathtaking landscapes and diverse ecosystems of California's National Parks. Our website is your ultimate guide to discovering the wonders of these natural treasures. Immerse yourself in the beauty of iconic parks like Yosemite, Joshua Tree, and Sequoia, among others.</p>
            <ImageGallery />
            <div id="site-explanation">
                <div>
                    <h3>Explore Nature's Masterpieces</h3>
                    <p>Discover detailed information about each national park, from towering redwoods and majestic mountains to expansive deserts and pristine coastlines. Whether you're an avid hiker, wildlife enthusiast, or simply seeking tranquility, our guides provide insights into the activities each park offers.</p>
                </div>
                <div>
                    <h3>Share Your Experience</h3>
                    <p>Become a part of our community by leaving reviews and sharing your experiences at each national park. Your insights and recommendations contribute to a vibrant community of nature enthusiasts, helping fellow explorers make the most of their visits.</p>
                </div>
            </div>
        </main>
    )
}

export default Home;