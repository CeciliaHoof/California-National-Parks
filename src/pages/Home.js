import ImageGallery from "../components/ImageGallery"

function Home(){
    //fetches /images from server and renders them with Image Gallery
    return(
        <main>
            <h2>Welcome message</h2>
            <ImageGallery />
        </main>
    )
}

export default Home;