import { Kugile } from "../../fontloader"

const Header = () => {
  return (
    <header className="bg-primary pt-50 py-30">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className={"text-white text-4xl sm:text-5xl " + Kugile.className}>Get in Touch with us</h1>
        </div>
    </header>
  )
}

export default Header