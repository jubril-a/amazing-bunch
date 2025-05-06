import HalfBox from "./HalfBox"
import Image from "next/image"
import { Kugile } from "../fontloader"

const Schedule = () => {
  return (
      <section className="w-full min-h-svh grid lg:grid-cols-2">
        <HalfBox className="bg-amber-700">
          <h2 className={`${Kugile.className} text-center text-5xl mb-3.5 text-white`}>Book Your Appointment</h2>
          <p className="text-center text-white mb-4.5">Say goodbye to long waits and hello to convenience. Schedule your next appointment with just a few clicks.</p>
          <a href="" className="flex items-center gap-2 bg-[#25d366] py-4 px-7 rounded-full w-fit m-auto hover:bg-background group">
            <Image className="group-hover:invert-100" src="/icons/whatsapp.png" alt="" width={32} height={32} />
            <span className="group-hover:text-white font-medium">Chat on WhatsApp</span>
          </a>
        </HalfBox>
        <HalfBox className="bg-[#171717]">
          <h2 className={`${Kugile.className} text-center text-5xl mb-3.5 text-white`}>Ready to turn your passion into a profession?</h2>
          <p className="text-center text-white mb-4.5">Join our salon training programs and learn from the best</p>
          <a href="" className="flex items-center gap-2 bg-[#25d366] py-4 px-7 rounded-full w-fit m-auto hover:bg-amber-400 group">
            <Image src="/info.png" alt="" width={24} height={24} />
            <span className="font-medium">Learn More</span>
          </a>
        </HalfBox>
      </section>
  )
}

export default Schedule
