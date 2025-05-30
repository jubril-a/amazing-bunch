import Navbar from "../components/Navbar"
import Header from "./components/Header"
import GallerySection from "./components/GallerySection"

const page = () => {
    return (
      <>
        <Navbar page="gallery" />
        <Header />
        <div>
          <GallerySection folder="interior" section="Interior" count={14} />
          <GallerySection folder="hair" section="Hair Care & Styling" count={13} />
          <GallerySection folder="nails" section="Nails" count={7} />
          <GallerySection folder="makeup" section="Makeup" count={2} />
        </div>
      </>
    )
  }
  
  export default page