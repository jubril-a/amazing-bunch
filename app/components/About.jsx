import { Kugile } from "../fontloader"

const About = () => {
  return (
    <div className="grid min-[840px]:grid-cols-2 min-[960px]:h-svh min-[840px]:min-h-[640px] border-b-1 border-[#00000021]">
      <div className="flex justify-center items-center py-20 px-6">
        <div className="max-w-[560]">
          <h1 className={`${Kugile.className} text-3xl mb-3.5`}>Welcome to Amazing Bunch Unisex Salon</h1>
          <p className="mb-2">Located in the heart of Lekki at JoyGood Mall, Amazing Bunch Unisex Salon is more than a salon. It is a relaxing space you can trust for your beauty process, where your glow-up begins.</p>
          <p className="mb-2">Our commitment is simple: we offer high-quality services in a clean, welcoming environment. Whether you are coming in for a quick retouch or a full beauty transformation, our team is here to deliver results that make you look and feel amazing.</p>
          <p className="mb-2">We specialise in all things beauty: hair, nails, skin, makeup, and grooming for both kings and queens. Step in stressed, walk out blessed.</p>
          <p>Need our service? <a href="tel:+2348025304967" className="text-[#E60376] border-b-3 border-b-[#E60376] hover:border-b-gray-800 ">Just give us a call</a></p>
        </div>
      </div>
      <div className="bg-primary max-[840px]:aspect-video bg-[url(/salon_portrait_3.webp)] bg-center bg-cover"></div>
    </div>
  )
}

export default About