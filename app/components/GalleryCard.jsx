import Image from "next/image"

const GalleryCard = ({ imgUrl }) => {
  return (
    <div className="group odd:bg-amber-100 even:bg-amber-200 w-[307.67px] h-[410.22px] relative bg-cover" style={{backgroundImage: `url(${imgUrl})`}}>
        <a className="hidden group-hover:grid justify-center items-center absolute inset-0" href="">
            <span className="bg-white py-1 px-2 rounded-full flex gap-1 text-sm items-center hover:bg-amber-200">
            <span>Explore our Gallery</span>
            <Image src="/icons/arrow.png" alt="" width={16} height={16} />
            </span>
        </a>
    </div>
  )
}

export default GalleryCard