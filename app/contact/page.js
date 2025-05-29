import Navbar from "../components/Navbar"
import Header from "./components/Header"
import ContactBox from "./components/ContactBox"
import Form from "./components/Form"

const page = () => {
  return (
    <>
      <Navbar page="contact" />
      <Header />
      <section className="bg-gray-900">
        <div className="max-w-6xl mx-auto grid min-[860px]:grid-cols-3 gap-4 px-4 py-15">
          <ContactBox image="mail" info="Email us" value="ikhagbodehelen@yahoo.com" />
          <ContactBox image="telephone" info="Call us" value="(+234) 8025304967" />
          <ContactBox image="location" info="Our location" value="JoyGood Mall, KM 27, Lekki-Epe Expressway" />
        </div>
      </section>
      <Form />
    </>
  )
}

export default page