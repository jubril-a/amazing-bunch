'use client'

import { Kugile } from "../fontloader"
import { useInView } from "motion/react"
import { useRef } from "react"
import GalleryCard from "./GalleryCard"

const Gallery = () => {
  const container = useRef(null)
  const isInView = useInView(container)

  return (
    <section ref={container} className="bg-[#f0eee4] py-20 md:py-20 lg:py-40">
      <h2 className={"text-5xl text-center mb-15 " + Kugile.className}>Gallery</h2>
      <div className="overflow-hidden flex">
        <div className={"mr-2 h-100 flex gap-2 w-max" + (isInView ? " animate-infinite-scroll" : "")}>
          {[1, 2, 3, 4, 5, 6, 8, 9, 10].map(id => <GalleryCard imgUrl={`/gallery/g${id}.jpg`} />)}
        </div>
        <div className={"mr-2 h-100 flex gap-2 w-max" + (isInView ? " animate-infinite-scroll" : "")}>
          {[1, 2, 3, 4, 5, 6, 8, 9, 10].map(id => <GalleryCard  imgUrl={`/gallery/g${id}.jpg`} />)}
        </div>
      </div>
    </section>
  )
}

export default Gallery