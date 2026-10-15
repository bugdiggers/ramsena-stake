 
import { Link } from "react-router-dom"
import logo from "../assets/icons/logo.webp"
const Navbar = () => {
  return (
      <>
          <div className="flex flex-wrap pt-5 px-5 justify-between items-center " >
              <a href="/" className=" h-[3rem]  " >
                  <img loading="lazy" className="h-full w-full" src={logo} alt="" />
              </a>
              
              <div>
                  <Link to="/Stake" className=" bg-white w-fit text-black px-4 py-2  rounded-3xl " > stake now ➜ </Link>
              </div>
              
          </div>
      </>
  )
}

export default Navbar