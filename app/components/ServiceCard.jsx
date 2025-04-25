import { Kugile } from "../fontloader"

const ServiceCard = ({bg, heading}) => {
  return (
    <div className="border-b-1 border-[#00000021]">
        <div className="aspect-[4/5]" style={{background: bg}}>
        </div>
        <h3 className={`${Kugile.className} p-4 text-center text-lg`}>{heading}</h3>
    </div>
  )
}

export default ServiceCard