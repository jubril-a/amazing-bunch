import Image from "next/image"
import { Kugile } from "../fontloader"

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col min-[760px]:flex-row gap-8 justify-between py-20 px-8 max-w-7xl m-auto">
          <div>
            <p className={"text-xl mb-2 text-[#9B005A] pt-2 " + Kugile.className}>Working Hours:</p>
            <p className="text-lg mb-2 text-gray-900"><span className={Kugile.className}>Weekdays: </span>time-in to time-out</p>
            <p className="text-lg mb-2 text-gray-900"><span className={Kugile.className}>Weekends: </span>time-in to time-out</p>
          </div>
          <div>
            <div className="flex gap-12 mb-2">
              <a href="https://www.instagram.com/amazing_bunch_salon/" className="p-2 hover:bg-[#ffb3d9] rounded-full opacity-80"><Image src="/icons/instagram.png" width={32} height={32} alt=""/></a>
              <a href="#" className="p-2 hover:bg-[#ffb3d9] rounded-full opacity-80"><Image src="/icons/facebook.png" width={32} height={32} alt=""/></a>
              <a href="#" className="p-2 hover:bg-[#ffb3d9] rounded-full opacity-80"><Image src="/icons/tiktok.png" width={32} height={32} alt=""/></a>
            </div>
            <p className="text-lg mb-2 text-gray-900"><span className={"text-[#9B005A] " + Kugile.className}>A: </span>JoyGood Mall, KM 27, Lekki-Epe Expressway</p>
            <p className="text-lg mb-2 text-gray-900"><span className={"text-[#9B005A] " + Kugile.className}>P: </span>(+234) 8025304967</p>
            <p className="text-lg mb-2 text-gray-900"><span className={"text-[#9B005A] " + Kugile.className}>E: </span>ikhagbodehelen@yahoo.com</p>
          </div>
        </div>
        <p className="text-center bg-background text-white p-3 font-medium">2025 &copy; Amazing Bunch Salon.  All Rights Reserved</p>
    </footer>
  )
}

export default Footer