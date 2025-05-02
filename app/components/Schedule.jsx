import Image from "next/image"
import { Kugile } from "../fontloader"

const Schedule = () => {
  return (
    <section className="w-full h-svh bg-amber-700 flex justify-center items-center">
        <div className="max-w-[560px]">
            <h2 className={`${Kugile.className} text-center text-5xl mb-3.5 text-white`}>Book Your Appointment</h2>
            <p className="text-center text-white mb-4.5">Say goodbye to long waits and hello to convenience. Schedule your next appointment with just a few clicks.</p>
            <div>
              <a href="" className="flex items-center gap-2 bg-[#25d366] py-4 px-7 rounded-full w-fit m-auto hover:bg-background group">
                <Image className="group-hover:invert-100" src="/whatsapp.png" alt="" width={32} height={32} />
                <span className="group-hover:text-white font-medium">Chat on WhatsApp</span>
              </a>
            </div>
        </div>
    </section>
  )
}

export default Schedule
