
const Navbar = () => {
  return (
    <nav className="bg-[#192a56] text-white">
         <div className="w-11/12 mx-auto flex justify-between">
            <h1 className="font-extrabold text-3xl">Smart <span className="text-[#4cd137]">Learn</span></h1>
            <div className="flex gap-x-3 items-center font-extrabold">
                <a className="hover:underline hover:text-[#4cd137]" href="#">Home</a>
                <a className="hover:underline hover:text-[#4cd137]" href="#">Courses</a>
                <a className="hover:underline hover:text-[#4cd137]" href="#">Add Courses</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
