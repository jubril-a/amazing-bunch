import Navbar from "./Navbar";
import Hero from "./Hero";
import { Intro } from "./Intro";

const Header = () => {
  return (
    <header className="relative">
      <Navbar />
      <Hero />
      <Intro />
    </header>
  )
}

export default Header