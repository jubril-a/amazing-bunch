import Navbar from "../components/Navbar"
import Header from "./components/Header"
import GallerySection from "./components/GallerySection"

const page = () => {
    return (
      <>
        <Navbar page="gallery" />
        <Header />
        <div>
          <GallerySection section="Interior" count={25} />
          <GallerySection section="Hair Care & Styling" count={15} />
          <GallerySection section="Nails" count={7} />
          <GallerySection section="Makeup" count={2} />
        </div>
      </>
    )
  }
  
  export default page