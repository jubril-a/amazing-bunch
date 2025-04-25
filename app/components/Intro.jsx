import { Cascadia } from "../fontloader"

export const Intro = () => {
  return (
    <div className="relative z-20 bg-white mt-svh">
        <div className="grid grid-cols-2 gap-4 max-w-7xl p-20 m-auto">
        <p className={`${Cascadia.className} text-3xl py-16`}>At Amazing Bunch Unisex Salon, we redefine self-care. From hair to skincare, grooming to glow-ups, we offer an experience that&apos;s as unique and vibrant as you.</p>
        <div className="bg-amber-500"></div>      
      </div>
    </div>
  )
}
