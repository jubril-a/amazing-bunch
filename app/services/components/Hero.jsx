import { Kugile } from "@/app/fontloader"

const Hero = () => {
  return (
    <header className="bg-[#F0EEE4]">
        <div className="relative bg-primary pt-50 pb-30">
            <div className="relative max-w-7xl mx-auto px-4">
                <h1 className={"text-white text-4xl sm:text-5xl " + Kugile.className}>Our Services</h1>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-15 sm:py-25">
            <p className="max-w-[760px] font-medium text-2xl">Explore a wide range of beauty and grooming services designed for both men and women. We  combine expert technique with premium products to give you a luxurious experience, every single time.</p>
        </div>
    </header>
  )
}

export default Hero