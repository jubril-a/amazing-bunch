import { Kugile } from "../fontloader"

export const Intro = () => {
  return (
    <div className="mt-svh bg-[#f0eee4]">
      <div className="grid grid-cols-2 gap-4 max-w-7xl p-40 m-auto">
        <p className={`${Kugile.className} text-3xl/normal py-16`}>At Amazing Bunch Unisex Salon, we redefine self-care. From hair to skincare, grooming to glow-ups, we offer an experience that&apos;s as unique and vibrant as you.</p>
        <div className="bg-background"></div>      
      </div>
    </div>
  )
}
