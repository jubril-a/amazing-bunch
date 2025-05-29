import { Kugile } from "@/app/fontloader"
import Image from "next/image"

const GallerySection = ({section, count}) => {
  return (
    <section className="py-20">
        <h2 className={"text-5xl text-center mb-10 " + Kugile.className}>{section}</h2>
        <div className="relative max-w-[1200px] mx-auto">
            
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-[-24px] right-[-24px]">
                <button className="w-12 aspect-square rounded-full bg-gray-100 border border-gray-100 cursor-pointer shadow-2xl flex justify-center items-center">
                    <Image src="/icons/next.png" width={24} height={24} alt="P" className="rotate-180" />
                </button>
                <button className="w-12 aspect-square rounded-full bg-gray-100 border border-gray-100 cursor-pointer shadow-2xl flex justify-center items-center">
                    <Image src="/icons/next.png" width={24} height={24} alt="N" />
                </button>
            </div>
            <div className="max-w-[1200px] mx-auto overflow-x-scroll flex flex-nowrap gap-4">
                {Array.from({length: count}, (_, index) => (
                    <div className="bg-rose-400 min-w-[288px] aspect-[3/4]"></div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default GallerySection