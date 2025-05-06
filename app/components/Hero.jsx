'use client'

import { Kugile } from "../fontloader"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
  return (
    <div className="md:sticky inset-0 bg-background h-svh grid justify-center items-center">
        <div className="relative z-10">
            <h1 className={`${Kugile.className} text-foreground text-center mb-3.5`} style={{fontSize: "clamp(3rem, 2.4545rem + 2.7273vw, 4.5rem)"}}>Amazing Brunch<br />Unisex Salon</h1>
            <div className="flex justify-center gap-4 max-[480px]:flex-col max-[480px]:">
              <a href="#" className="bg-amber-400 hover:bg-amber-500 py-3 sm:py-4 px-5 sm:px-6 rounded-full font-medium text-center inline-block">Call for Enquiries</a>
              <a href="#" className="bg-blue-300 hover:bg-blue-400 py-3 sm:py-4 px-5 sm:px-6 rounded-full font-medium text-center inline-block">View our Services</a>
            </div>
        </div>
        <div className="absolute inset-0 flex items-end justify-center invert opacity-15">
        <div className="w-80">
            <DotLottieReact
            src="https://lottie.host/fb31618a-4add-4548-9e05-b2533a81cd83/yEPOrYAFGe.lottie"
            loop
            autoplay
            />
        </div>
        </div>
    </div>
  )
}

export default Hero