'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"

const NavLink = ({children, page, link, to}) => {

  return (
    <Link href={to} className="max-sm:py-4 max-sm:px-4 max-sm:border-b-1 max-sm:border-b-gray-300 hover:border-b-1 hover:border-[#E60376]" style={page == link ? {borderBottom: "1px solid #717173"} : {}}>{children}</Link>
  )
}

const Navbar = ({page}) => {
  let [isVisible, setVisible] = useState(false)
  const transition = {duration: .75, ease: [.246,.75,.187,1]}
  
  return (
    <div className="fixed top-0 w-full px-4 py-4 z-50 bg-white border-b-1 border-[#00000021]">
        <div className="flex justify-between items-center max-w-7xl m-auto flex-wrap">
            <Image src="/logo2.png" alt="logo" width={40} height={40} />
            <button className="sm:hidden" onClick={() => setVisible(!isVisible)}><Image src={isVisible ? "/icons/cancel.png" : "/icons/menu.png"} alt="" width={28} height={28} /></button>
            <motion.nav
              initial={isVisible ? {y: "-100%"} : null}
              animate={isVisible ? {y: 0} : null}
              transition={transition}
              className={`${isVisible ? "grid bg-white py-6 px-3 w-full" : "max-sm:hidden"} flex sm:gap-4 text-sm`}>
                <NavLink page={page} link="home" to="/">HOME</NavLink>
                <NavLink page={page} link="services" to="/services">SERVICES</NavLink>
                <NavLink page={page} link="gallery" to="/gallery">GALLERY</NavLink>
                <NavLink page={page} link="contact" to="/contact">CONTACT</NavLink>
            </motion.nav>
        </div>
    </div>
  )
}

export default Navbar
