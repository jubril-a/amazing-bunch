import { Kugile } from "../fontloader"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section className="py-40">
        <h2 className={`${Kugile.className} text-center text-5xl mb-3.5`}>Services</h2>
        <p className="max-w-3xl text-center m-auto text-balance mb-15">Explore a wide range of beauty and grooming services designed for both men and women. We combine expert technique with premium products to give you a luxurious experience, every single time.</p>
        <div className="grid grid-cols-4 ">
            <ServiceCard bg="#f0eee4" heading="Hair Care & Styling" />
            <ServiceCard bg="#171717" heading="Nail & Spa Treatments" />
            <ServiceCard bg="#f0eee4" heading="Facials & Skin Care" />
            <ServiceCard bg="#171717" heading="Makeup & Beauty" />
        </div>
    </section>
  )
}

export default Services
