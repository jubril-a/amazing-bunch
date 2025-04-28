import { Kugile } from "../fontloader"

const ServiceCard = ({bg, heading, body}) => {
  return (
    <div className="border-b-1 border-[#00000021]">
        <div className="group relative aspect-[4/5] p-2" style={{background: bg}}>
          <div className="absolute inset-2 top-auto p-4 bg-white hidden group-hover:block">
            <p>{body}</p>
          </div>
        </div>
        <h3 className={`${Kugile.className} p-4 text-center text-lg`}>{heading}</h3>
    </div>
  )
}

export default ServiceCard