import { Kugile } from "../fontloader"

export const Intro = () => {
  return (
    <div className="mt-svh bg-[#f0eee4]">
      <div className="grid min-[860px]:grid-cols-2 min-[860px]:gap-4 max-w-7xl py-20 px-6 md:p-20 lg:p-40 m-auto">
        <p className={`${Kugile.className} text-2xl sm:text-3xl/normal min-[780px]:py-16`}>At Amazing Bunch Unisex Salon, we redefine self-care. From hair to skincare, grooming to glow-ups, we offer an experience that&apos;s as unique and vibrant as you.</p>
        <div className="bg-background max-[860px]:aspect-video max-[780px]:mt-4"></div>      
      </div>
    </div>
  )
}
