'use client'

import { Kugile } from "../fontloader"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
  return (
    <div className="sticky inset-0 bg-background h-svh grid justify-center items-center">
        <div className="relative z-10">
            <h1 className={`${Kugile.className} text-foreground text-7xl/normal text-center mb-3.5`}>Amazing Brunch<br />Unisex Salon</h1>
            <div className="flex justify-center gap-4">
            <a href="#" className="bg-amber-400 hover:bg-amber-500 py-4 px-6 rounded-full font-medium text-center inline-block">Call for Enquiries</a>
            <a href="#" className="bg-blue-300 hover:bg-blue-400 py-4 px-6 rounded-full font-medium text-center inline-block">View our Services</a>
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