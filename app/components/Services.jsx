import { Kugile } from "../fontloader"
import ServiceCard from "./ServiceCard"

const services = [
  {
    bgImage: "/gallery/hair/1.webp",
    heading: "Hair Care and Styling",
    body: "Braiding, Weave Installation, Dreadlocks, Revamps, Hair Treatments, Colouring, Retouching, Steaming & Barbing",
  },
  {
    bgImage: "/gallery/nails/3.webp",
    heading: "Nail and Spa Treatments",
    body: "Manicure, Pedicure, Nail Art, Foot Spa, Waxing, Scrubs & Body Massage",
  },
  {
    bgImage: "/gallery/spa/3.webp",
    heading: "Facials and Skin Care",
    body: "Deep cleansing, exfoliation, hydration treatments & glow facials for every skin type",
  },
  {
    bgImage: "/gallery/makeup/1.webp",
    heading: "Makeup and Beauty",
    body: "Full glam, soft glam, bridal makeup, and beauty products sales",
    bgPos: "top"
  },
]

const Services = () => {
  return (
    <section className="py-25 lg:py-35">
        <h2 className={`${Kugile.className} text-center text-5xl mb-3.5`}>Services</h2>
        <p className="max-w-3xl text-center m-auto text-balance mb-15">Explore a wide range of beauty and grooming services designed for both men and women. We combine expert technique with premium products to give you a luxurious experience, every single time.</p>
        <div className="grid min-[560px]:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard bg={service.bgImage} heading={service.heading} body={service.body} bgPos={service.bgPos} />)}
        </div>
    </section>
  )
}

export default Services
