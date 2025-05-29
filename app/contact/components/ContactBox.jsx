import Image from "next/image"

const ContactBox = ({image, info, value}) => {
  return (
    <div className="px-5 py-8 border-1 border-[#ffffff60] rounded-xl">
        <div className="bg-[#ffffff18] mb-6 w-12 aspect-square grid justify-center items-center rounded-[8px]">
            <Image src={`/icons/${image}.png`} className="invert-100" alt="" width="16" height="16" />
        </div>
        <h3 className="font-bold text-xl text-white mb-3">{info}</h3>
        <p className="text-[#ffffff9a]">{value}</p>
    </div>
  )
}

export default ContactBox