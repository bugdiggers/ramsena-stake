
import { Link } from "react-router-dom"
import earning1 from "../../assets/images/earning1.webp"
import earning2 from "../../assets/images/earning2.webp"
import earning3 from "../../assets/images/earning3.webp"
import earning4 from "../../assets/images/earning4.png"
// import earningStep1 from "../../assets/images/earningStep1.webp"
// import earningStep2 from "../../assets/images/earningStep2.webp"
// import earningStep3 from "../../assets/images/earningStep3.webp"
// import earningStep4 from "../../assets/images/earningStep4.webp"

const Earning = () => {
    return (
        <>
            <div id="Earning-main" className=" my-10 min-h-screen w-screen">

                <div className="box_parent   my-32 tablet:mb-20 ">

                    <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="flt_tag">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={2} result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                            </filter>
                        </defs>
                    </svg>

                    <div className="box2    relative text-white flex  items-center  laptop:flex-col-reverse laptop:items-start   p-9 pr-[12%] laptop:tablet:pr-4 laptop:tablet:pl-4 laptop:tablet:pt-[70vmin] laptop:tablet:pb-[15%]    laptop:tablet:phone:pb-[25%] laptop:tablet:items-center " >

                        <div id="left" className="  flex flex-col gap-4  w-[55%] tablet:items-center tablet:text-center tablet:w-[100%]  " >
                            <p className="text-lg text-gray-300" >One year Staking (360 Days - 18%)  </p>
                            <h1 className="text-6xl font-bold laptop:text-5xl laptop:phone:text-3xl  " >Accelerate Your Earnings</h1>
                            <p className=" max-w-[40rem] text-gray-300 " >Lock in your crypto assets for one year and enjoy a steady 18% return. With this option, you can quickly grow your investment while maintaining flexibility for future opportunities.</p>
                            <div className="flex gap-10 items-center " >
                                <Link to="/Stake" className=" bg-white text-black px-7 py-2  rounded-3xl " > stake now ➜ </Link>
                                {/* <a href="" className=" underline" > Find Out More</a> */}
                            </div>
                        </div>
                        <div id="mid" className="" >
                            <h2 className=" text-7xl font-bold tablet:text-5xl tablet:text-center text-[#FFDB00] " >18.0<sup className="text-4xl align-super " >%</sup> </h2>
                            <p>based on monthly returns</p>
                        </div>
                        

                        {/* <div className="  visible md:hidden   " >
                            <img loading="lazy" className=" h-full  w-full " src={earning1} alt="" />
                        </div> */}
                    </div>
                    <div className=" absolute  max-w-auto tablet:w-[80%]  -top-20 right-20 laptop:top-0 laptop:tablet:phone:top-20 laptop:right-10 laptop:tablet:top-[20%] tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2 " >
                        <img loading="lazy" className=" h-full  w-full " src={earning1} alt="" />
                    </div>
   
                </div>




                {/* <div className=" flex flex-wrap  justify-evenly gap-3 ">

                    <div id="cd" className="flex gap-5 max-w-[20rem]">
                        <div>
                            <img loading="lazy" src={earningStep1} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl   tracking-wide " >Any amount</h2>
                            <p className=" font-thin text-[#AEAEAE] ">Earn liquid staking yield on 0.01 Ramsena or more!</p>
                        </div>
                    </div>
                    <div id="cd" className="flex gap-5 max-w-[20rem]">
                        <div>
                            <img loading="lazy" src={earningStep2} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl   tracking-wide " >Earn rewards over time</h2>
                            <p className=" font-thin text-[#AEAEAE] ">Ramsena earns rewards over time
                                increasing its value</p>
                        </div>
                    </div>
                    <div id="cd" className="flex gap-5 max-w-[20rem]">
                        <div>
                            <img loading="lazy" src={earningStep3} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl   tracking-wide " >Easily unstake</h2>
                            <p className=" font-thin text-[#AEAEAE] ">Unstake at any time with no
                                minimum lock up periods</p>
                        </div>
                    </div>
                    <div id="cd" className="flex gap-5 max-w-[20rem]">
                        <div>
                            <img loading="lazy" src={earningStep4} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl   tracking-wide " >Any amount</h2>
                            <p className=" font-thin text-[#AEAEAE] ">Earn liquid staking yield on 0.01 Ramsena or more!</p>
                        </div>
                    </div>

                </div> */}

                {/* 2 */}
                <div className="box_parent   my-32 tablet:mb-20 ">

                    <div className="box3    relative text-white flex justify-end  items-center  laptop:flex-col laptop:items-end   p-9 pl-[12%] laptop:tablet:pl-4 laptop:tablet:pr-4 laptop:tablet:pt-[70vmin] laptop:tablet:pb-[15%]    laptop:tablet:phone:pb-[25%] laptop:tablet:items-center " >

                        <div id="mid" className="" >
                            <h2 className=" text-7xl font-bold tablet:text-5xl tablet:text-center text-[#FFDB00] " >40.0<sup className="text-4xl align-super " >%</sup></h2>
                            <p>based on monthly returns</p>
                        </div>
                        <div id="left" className="  flex items-end  text-right flex-col gap-4  w-[55%] tablet:items-center tablet:text-center tablet:w-[100%]  " >
                            <p className="text-lg text-gray-300" >Two years Staking (720 Days - 40%)</p>
                            <h1 className="text-6xl font-bold laptop:text-5xl laptop:phone:text-3xl  " >Double Your Returns</h1>
                            <p className=" max-w-[40rem] text-gray-300 " >Opt for our 2-year staking strategy to amplify your earnings. By committing to a longer term, you can secure a generous 40% return.</p>
                            <div className="flex gap-10 items-center " >
                                <Link to="/Stake" className=" bg-white text-black px-7 py-2  rounded-3xl " > stake now ➜ </Link>
                                {/* <a href="" className=" underline" > Find Out More</a> */}
                            </div>
                        </div>

                    </div>

                    <div className="  absolute  max-w-[100%]  tablet:w-[80%]  -top-10 left-20 laptop:top-0 laptop:tablet:phone:top-24   laptop:tablet:top-[20%] tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2 " >
                        <img loading="lazy" className=" h-full  w-full " src={earning2} alt="" />
                    </div>

                </div>

                {/* 3 */}
                <div className="box_parent   my-32 tablet:mb-20 ">

                    <div className="box2    relative text-white flex  gap-5 items-center  laptop:flex-col-reverse laptop:items-start   p-9 pr-[12%] laptop:tablet:pr-4 laptop:tablet:pl-4 laptop:tablet:pt-[70vmin] laptop:tablet:pb-[15%]    laptop:tablet:phone:pb-[25%] laptop:tablet:items-center " >

                        <div id="left" className="  flex flex-col gap-4  w-[55%] tablet:items-center tablet:text-center tablet:w-[100%]  " >
                            <p className="text-lg text-gray-300" >Three years Staking (1080 Days - 80%) </p>
                            <h1 className="text-6xl font-bold laptop:text-5xl laptop:phone:text-3xl  " >Maximize Profits Over Time</h1>
                            <p className=" max-w-[40rem] text-gray-300 " >For investors seeking long-term stability and substantial rewards, our 3-year staking solution is the perfect choice. By staking your assets for three years, you can take advantage of an impressive 80% return.</p>
                            <div className="flex gap-10 items-center " >
                                <Link to="/Stake" className=" bg-white text-black px-7 py-2  rounded-3xl " > stake now ➜ </Link>
                                <a href="" className=" underline" > Find Out More</a>
                            </div>
                        </div>
                        <div id="mid" className="" >
                            <h2 className=" text-7xl font-bold tablet:text-5xl tablet:text-center text-[#FFDB00] " >80.0<sup className="text-4xl align-super " >%</sup></h2>
                            <p>based on monthly returns</p>
                        </div>


                        {/* <div className="  visible md:hidden   " >
                            <img loading="lazy" className=" h-full  w-full " src={earning1} alt="" />
                        </div> */}
                    </div>
                    <div className=" absolute  max-w-auto tablet:w-[80%]  -top-20 right-20 laptop:top-0 laptop:tablet:phone:top-20 laptop:right-10 laptop:tablet:top-[20%] tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2 " >
                        <img loading="lazy" className=" h-full  w-full " src={earning3} alt="" />
                    </div>

                </div>

                {/* 4 */}
                <div className="box_parent   my-32 tablet:mb-20 ">

                    <div className="box3    relative text-white flex justify-end  items-center  laptop:flex-col laptop:items-end   p-9 pl-[12%] laptop:tablet:pl-4 laptop:tablet:pr-4 laptop:tablet:pt-[70vmin] laptop:tablet:pb-[15%]    laptop:tablet:phone:pb-[25%] laptop:tablet:items-center " >

                        <div id="mid" className="" >
                            <h2 className=" text-7xl font-bold tablet:text-5xl tablet:text-center text-[#FFDB00] " >160.0<sup className="text-4xl align-super " >%</sup></h2>
                            <p>based on monthly returns</p>
                        </div>
                        <div id="left" className="  flex items-end  text-right flex-col gap-4  w-[55%] tablet:items-center tablet:text-center tablet:w-[100%]  " >
                            <p className="text-lg text-gray-300" >Four-Year Staking (1440 Days - 160%)  </p>
                            <h1 className="text-6xl font-bold laptop:text-5xl laptop:phone:text-3xl  " >Unlock Greater Rewards</h1>
                            <p className=" max-w-[40rem] text-gray-300 " >Commit to a four-year staking period and reap the benefits of a remarkable 160% return. This extended duration offers investors the opportunity to maximize their profits significantly.</p>
                            <div className="flex gap-10 items-center " >
                                <Link to="/Stake" className=" bg-white text-black px-7 py-2  rounded-3xl " > stake now ➜ </Link>
                                {/* <a href="" className=" underline" > Find Out More</a> */}
                            </div>
                        </div>

                    </div>

                    <div className="  absolute  max-w-[100%]  tablet:w-[80%]  -top-10 left-20 laptop:top-0 laptop:tablet:phone:top-24   laptop:tablet:top-[20%] tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2 " >
                        <img loading="lazy" className=" h-full  w-full " src={earning4} alt="" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Earning