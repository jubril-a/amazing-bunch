import Hero from "./components/Hero"
import ServiceSection from "./components/ServiceSection"

const services = [
  {
    id: 0,
    imgUrl : "/hair3.jpg",
    heading: "Hair Care & Styling",
    subServices: ["Braiding", "Weave Installation", "Dreadlocks", "Revamps", "Hair Treatments", "Colouring", "Retouching", 
    "Steaming", "Barbing"],
  },
  {
    id: 1,
    imgUrl : "/nails.jpg",
    heading: "Nail & Spa Treatments",
    subServices: ["Manicure", "Pedicure", "Nail Art", "Foot Spa", "Waxing", "Scrubs", "Body Massage"],
  },
  {
    id: 2,
    imgUrl : "/facials.jpg",
    heading: "Facials & Skin Care",
    subServices: ["Deep cleansing", "Exfoliation", "Hydration", "Treatments", "Glow facials for every skin type"],
  },
  {
    id: 3,
    imgUrl : "/makeup.jpg",
    heading: "Makeup & Beauty",
    subServices: ["Full glam", "soft glam", "bridal makeup", "beauty product sales"],
  }
]

const page = () => {
    return (
      <>
        <Hero />
        <div>
          {services.map(service => 
            <ServiceSection serviceDetails={service} />
          )}
        </div>
      </>
    )
  }
  
  export default page