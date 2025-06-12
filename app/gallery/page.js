import Navbar from "../components/Navbar"
import Header from "./components/Header"
import GallerySection from "./components/GallerySection"

const page = () => {
    return (
      <>
        <Navbar page="gallery" />
        <Header />
        <div>
          <GallerySection folder="interior" section="Interior" count={17} />
          <GallerySection folder="hair" section="Hair Care and Styling" count={17} />
          <GallerySection folder="nails" section="Nails" count={24} />
          <GallerySection folder="makeup" section="Makeup" count={1} />
          <GallerySection folder="spa" section="Spa" count={2} />
        </div>
      </>
    )
  }
  
  export default page