import { Kugile } from "@/app/fontloader"

const ServiceSection = ({serviceDetails}) => {
  return (
    <section className="last:border border-gray-200 md:even:[&_.child]:order-[1]">
        <div className="grid md:grid-cols-2 h-[100vh] min-h-fit">
            <div className="child py-20 px-6 flex items-center">
                <div className="w-full max-w-xl mx-auto">
                    <h1 className={"text-3xl mb-3.5 " + Kugile.className}>{serviceDetails.heading}</h1>
                    <ul>
                        {serviceDetails.subServices.map(sub =>
                            <li className="p-4 text-lg text-gray-700 border-b border-gray-200 last:border-0">{sub}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="bg-secondary max-md:order-[-1] max-md:aspect-[4/5] bg-cover bg-top" style={{backgroundImage: `url(${serviceDetails.imgUrl})`}}>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection