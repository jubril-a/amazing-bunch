import Link from "next/link"
import HalfBox from "./HalfBox"
import Image from "next/image"
import { Kugile } from "../fontloader"

const Schedule = () => {
  return (
      <section className="w-full min-h-svh grid lg:grid-cols-2">
        <HalfBox className="bg-amber-700 bg-[url(/salon_portrait_4.JPG)] bg-cover relative">
          <div className="absolute inset-0 bg-background opacity-90"></div>
          <div className="relative">
            <h2 className={`${Kugile.className} text-center text-5xl mb-3.5 text-white`}>Book Your Appointment</h2>
            <p className="text-center text-white mb-4.5">Say goodbye to long waits and hello to convenience. Schedule your next appointment with just a few clicks.</p>
            <Link href="" className="flex items-center gap-2 bg-[#fff] py-4 px-7 rounded-full w-fit m-auto hover:bg-[#ff6ec3] group">
              <img className="group-hover:invert-100" src="/icons/whatsapp.png" alt="" width={32} height={32} />
              <span className="group-hover:text-white font-medium">Chat on WhatsApp</span>
            </Link>
          </div>
        </HalfBox>
        <HalfBox className="bg-[#9b005a]">
          <h2 className={`${Kugile.className} text-center text-5xl mb-3.5 text-white`}>Ready to turn your passion into a profession?</h2>
          <p className="text-center text-white mb-4.5">Join our salon training programs and learn from the best</p>
          <Link href="tel:+2348025304967" className="flex items-center gap-2 bg-[#F0EEE4] py-4 px-7 rounded-full w-fit m-auto hover:bg-background group">
            <img className="invert-100 group-hover:invert-0" src="/register.svg" alt="" width={24} height={24} />
            <span className="font-medium group-hover:text-white">Call Now to Apply</span>
          </Link>
        </HalfBox>
      </section>
  )
}

export default Schedule
