import Navbar from "../components/Navbar"
import Hero from "./components/Hero"
import ServiceSection from "./components/ServiceSection"

const services = [
  {
    id: 0,
    imgUrl : "/hair3.jpg",
    heading: "Hair Care and Styling",
    subServices: ["Braiding", "Weave Installation", "Dreadlocks", "Revamps", "Hair Treatments", "Colouring", "Retouching", 
    "Steaming", "Barbing"],
  },
  {
    id: 1,
    imgUrl : "/nails.jpg",
    heading: "Nail and Spa Treatments",
    subServices: ["Manicure", "Pedicure", "Nail Art", "Foot Spa", "Waxing", "Scrubs", "Body Massage"],
  },
  {
    id: 2,
    imgUrl : "/facials.jpg",
    heading: "Facials and Skin Care",
    subServices: ["Deep cleansing", "Exfoliation", "Hydration", "Treatments", "Glow facials for every skin type"],
  },
  {
    id: 3,
    imgUrl : "/gallery/makeup/1.png",
    heading: "Makeup and Beauty",
    subServices: ["Full glam", "soft glam", "bridal makeup", "beauty product sales"],
  }
]

const page = () => {
    return (
      <>
        <Navbar page="services" />
        <Hero />
        <div>
          {services.map(service => 
            <ServiceSection key={service.id} serviceDetails={service} />
          )}
        </div>
      </>
    )
  }
  
  export default page