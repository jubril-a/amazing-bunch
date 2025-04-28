'use client'

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full px-2 py-4 z-50 bg-white border-b-1 border-[#00000021]">
        <div className="flex justify-between items-center max-w-7xl m-auto">
            <span>Logo</span>
            <nav className="flex gap-4 text-sm">
                <a href="" className="hover:border-b-1 hover:border-amber-600">HOME</a>
                <a href="" className="hover:border-b-1 hover:border-amber-600">SERVICES</a>
                <a href="" className="hover:border-b-1 hover:border-amber-600">TRAINING</a>
                <a href="" className="hover:border-b-1 hover:border-amber-600">CONTACT</a>
            </nav>
        </div>
    </div>
  )
}

export default Navbar