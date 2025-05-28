import Hero from "./Hero";
import { Intro } from "./Intro";
import About from "./About";


const Header = () => {
  return (
    <header className="relative">
      <Hero />
      <div className="relative z-20 bg-white ">
        <Intro />
        <About />
      </div>
    </header>
  )
}

export default Header