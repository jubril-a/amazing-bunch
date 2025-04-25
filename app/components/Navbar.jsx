'use client'

import { motion, useScroll } from "motion/react"

const Navbar = () => {
//   const { scrollY } = useScroll();

  return (
    <motion.div
    className="fixed top-0 w-full px-2 py-4 z-50 bg-white">
        <div className="flex justify-between items-center max-w-7xl m-auto">
            <span>Logo</span>
            <nav className="flex gap-4 text-sm">
                <a href="">HOME</a>
                <a href="">SERVICES</a>
                {/* <a href=""></a> */}
                <a href="">CONTACT</a>
            </nav>
        </div>
    </motion.div>
  )
}

export default Navbar