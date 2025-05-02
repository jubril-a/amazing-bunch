'use client'

import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"

const Navbar = () => {
  let [isVisible, setVisible] = useState(false)
  const transition = {duration: .75, ease: [.246,.75,.187,1]}

  return (
    <div className="fixed top-0 w-full px-4 py-4 z-50 bg-white border-b-1 border-[#00000021]">
        <div className="flex justify-between items-center max-w-7xl m-auto flex-wrap">
            <span>Logo</span>
            <button className="sm:hidden" onClick={() => setVisible(!isVisible)}><Image src={isVisible ? "/cancel.png" : "/menu.png"} alt="" width={28} height={28} /></button>
            <motion.nav
              initial={isVisible ? {y: "-100%"} : null}
              animate={isVisible ? {y: 0} : null}
              transition={transition}
              className={`${isVisible ? "grid bg-white py-6 px-3 w-full" : "max-sm:hidden"} flex sm:gap-4 text-sm`}>
                <a href="" className="max-sm:py-4 max-sm:px-4 max-sm:border-b-1 max-sm:border-b-gray-300 hover:border-b-1 hover:border-amber-600">HOME</a>
                <a href="" className="max-sm:py-4 max-sm:px-4 max-sm:border-b-1 max-sm:border-b-gray-300 hover:border-b-1 hover:border-amber-600">SERVICES</a>
                <a href="" className="max-sm:py-4 max-sm:px-4 max-sm:border-b-1 max-sm:border-b-gray-300 hover:border-b-1 hover:border-amber-600">TRAINING</a>
                <a href="" className="max-sm:py-4 max-sm:px-4 max-sm:border-b-1 max-sm:border-b-gray-300 hover:border-b-1 hover:border-amber-600">CONTACT</a>
            </motion.nav>
        </div>
    </div>
  )
}

export default Navbar