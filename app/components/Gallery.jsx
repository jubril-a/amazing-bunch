'use client'

import { Kugile } from "../fontloader"
import { useInView } from "motion/react"
import { useRef } from "react"
import Image from "next/image"

const Gallery = () => {
  const container = useRef(null)
  const isInView = useInView(container)

  return (
    <section ref={container} className="bg-[#f0eee4] py-20 md:py-20 lg:py-40">
      <h2 className={"text-5xl text-center mb-15 " + Kugile.className}>Gallery</h2>
      <div className="overflow-hidden flex">
        <div className={"mr-2 h-100 flex gap-2 w-max" + (isInView ? " animate-infinite-scroll" : "")}>
          {/* IMPORTANT: Remove width and background color when actual image is added */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(imgUrl => <div className="group odd:bg-amber-100 even:bg-amber-200 w-72 h-full rounded-xl relative">
            <a className="hidden group-hover:grid justify-center items-center absolute inset-0" href="">
              <span className="bg-white py-1 px-2 rounded-full flex gap-1 text-sm items-center hover:bg-amber-200">
                <span>Explore our Gallery</span>
                <Image src="/icons/arrow.png" alt="" width={16} height={16} />
              </span>
              </a>{imgUrl}</div>)}
        </div>
        <div className={"mr-2 h-100 flex gap-2 w-max" + (isInView ? " animate-infinite-scroll" : "")}>
          {/* IMPORTANT: Remove width and background color when actual image is added */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(imgUrl => <div className="group odd:bg-amber-100 even:bg-amber-200 w-72 h-full rounded-xl relative">
            <a className="hidden group-hover:grid justify-center items-center absolute inset-0" href="">
              <span className="bg-white py-1 px-2 rounded-full flex gap-1 text-sm items-center hover:bg-amber-200">
                <span>Explore our Gallery</span>
                <Image src="/icons/arrow.png" alt="" width={16} height={16} />
              </span>
              </a>{imgUrl}</div>)}
        </div>
      </div>
    </section>
  )
}

export default Gallery