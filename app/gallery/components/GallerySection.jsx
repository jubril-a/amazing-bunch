'use client'

import { Kugile } from "@/app/fontloader"
import { useRef } from "react"

const GallerySection = ({section, count, folder}) => {
    let gallery = useRef()

    let scrollGallery = (direction) => {
        let galleryWidth = gallery.current.clientWidth
        let scrollDistance = Math.floor(galleryWidth / 288) * 288

        if (direction == "forward") {
            gallery.current.scrollLeft += scrollDistance
        }

        if (direction == "backward") {
            gallery.current.scrollLeft -= scrollDistance
        }
    }

  return (
    <section className="py-20 last:border-b last:border-gray-200">
        <h2 className={"text-4xl md:text-5xl text-center mx-4 mb-10 " + Kugile.className}>{section}</h2>
        <div className="relative max-w-[1200px] px-4 min-[660px]:px-6 mx-auto"> 
            <div className="max-[660px]:hidden flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0" style={count < 4 ? {display: "none"} : {}}>
                <button onClick={() => scrollGallery("backward")} className="w-12 aspect-square rounded-full bg-gray-100 border border-gray-100 cursor-pointer shadow-2xl flex justify-center items-center">
                    <img src="/icons/next.png" width={24} height={24} alt="P" className="rotate-180" />
                </button>
                <button onClick={() => scrollGallery("forward")} className="w-12 aspect-square rounded-full bg-gray-100 border border-gray-100 cursor-pointer shadow-2xl flex justify-center items-center">
                    <img src="/icons/next.png" width={24} height={24} alt="N" />
                </button>
            </div>
            <div ref={gallery} className="max-w-[1200px] mx-auto overflow-x-scroll scroll-smooth no-scrollbar flex flex-nowrap gap-4">
                {Array.from({length: count}, (_, index) => (
                    <div className="bg-gray-300 min-w-[288px] aspect-[3/4]">
                        <img src={`/gallery/${folder}/${index+1}.webp`} alt="" width={288} height={384} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default GallerySection