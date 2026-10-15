
// import logo1 from "../assets/voip_logo (1)/logotext.webp"
import youtube from "../assets/icons/YouTube.webp"
import twiter from "../assets/icons/Twitter.webp"
import Telegram from "../assets/icons/Telegram App.webp"
import Instagram from "../assets/icons/Instagram.webp"
import Medium from "../assets/icons/Medium.webp"
import logo from "../assets/icons/logo.webp"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="  bg-[#101010] z-10  ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
                    <div className="md:flex md:justify-between tablet:justify-center z-10">

                        <div className=" flex  flex-col gap-5 mb-6 max-w-[40%] tablet:max-w-[100%] tablet:items-center  md:mb-0">
                            <a href="" className="flex items-center">
                                <img loading="lazy" src={logo} className="h-[50px] me-3" alt="FlowBite Logo" />
                                {/* <span className="self-center text-primary-gradient text-4xl font-bold whitespace-nowrap  text-white">VoIP Finance</span> */}
                            </a>
                            <p className=" tablet:text-center " > Spread the word about Ramsena today! Share with friends and family, and watch your earnings grow effortlessly. Join the movement and start earning now!</p>
                            <div className="flex gap-5" >
                                <a target="blank" href=" "> <img loading="lazy" className=" h-auto w-auto hover:scale-[1.3] transform-scale duration-300" src={youtube} alt="youtube" /> </a>
                                <a target="blank" href=" "> <img loading="lazy" className=" h-auto w-auto hover:scale-[1.3] transform-scale duration-300" src={twiter} alt="twiter" /> </a>
                                <a target="blank" href=" "> <img loading="lazy" className=" h-auto w-auto hover:scale-[1.3] transform-scale duration-300" src={Telegram} alt="Telegram" /> </a>
                                <a target="blank" href=" "> <img loading="lazy" className=" h-auto w-auto hover:scale-[1.3] transform-scale duration-300" src={Instagram} alt="Instagram" /> </a>
                                <a target="blank" href=" "> <img loading="lazy" className=" h-auto w-auto hover:scale-[1.3] transform-scale duration-300" src={Medium} alt="Medium" /> </a>

                            </div>
                        </div>
                        <div className=" mt-16 mt- flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap z-10">
                            <div className=" flex flex-col tablet:items-center " >
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold   uppercase text-white">Resources</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center  ">
                                        <Link to="/" className="unline  hover:underline " >home</Link>
                                    </li>
                                    <li className="  tablet:text-center  " >
                                        <a href="#" className="hover:underline">keynote</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <a href="#" className="hover:underline ">Github</a>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <a href="#" className="hover:underline">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold   uppercase text-white">Legal</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  border-gradient sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm   sm:text-center  text-gray-400">© 2024 <a href="" className="hover:underline">Ramsena</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer