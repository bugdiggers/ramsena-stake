// import st from "../../assets/icons/safe tick.webp"
// import rcoin from "../../assets/icons/ramsenaCoin.webp"
import HeroImg from "../../assets/images/heroImg.svg"

const Hero = () => {
    return (
        <>
            <div id="hero-main" className=" relative min-h-[90vh]  flex items-center bg-[url('/bgimg/herobg.jpg')] bg-  bg-cover bg-center px-3 z-0 py-10  mx-5 phone:mx-2 my-10 rounded-[40px]   ">
                <div
                    className="absolute z-[-1] inset-0 h-full bg-black opacity-[0.5] rounded-[40px]"
                ></div>

                <div className="h-full   w-full flex laptop:flex-col items-center justify-center ">

                    <div id="hero-left"
                        className="     w-[55%] h-[100%] flex flex-col justify-center  gap-10 desktop:w-[100%]  desktop:mt-[50px] "
                    >
                        <div id="hero-left-top" className="  flex flex-col gap-8">

                            <h1 className=" text-[75px] font-normal relative  leading-tight  laptop:text-center desktop:text-[60px]  desktop:laptop:text-[50px]  desktop:laptop:phone:text-[30px]    ">

                                {/* Earn rewards every day
                                on Staking up to 18%
                                per year */}
                                Welcome to Ramsena Staking ,Earn rewards every day

                            </h1>

                            <p className=" flex leading-snug font-normal    text-[17px] w-[80%] tracking-[0.35px] desktop:w-[90%] laptop:text-center  laptop:m-auto desktop:phone:w-[100%]    ">
                                Maximize your crypto assets with Ramsena's staking plans. Secure and grow your investment with our reliable, profitable staking options. Unlock the full potential of your holdings today and enjoy impressive returns.

                            </p>
                        </div>
                    </div>

                    <div
                        id="hero-right"
                        className=" text-black relative z-10 laptop:mt-10 w-[40%] h-[100%] flex justify-center gap-0  desktop:w-[100%] "
                    >

                        <div>
                            <img src={HeroImg} alt="" />
                        </div>
                        {/* <div id="hero-right-container"
                            className=" flex   flex-col py-5 justify-center gap-5     min-h-[600px]  w-[500px] max-w-[600px] overflow-hidden rounded-[30px]   bg-cover bg-opacity-80 bg-center  px-4"
                        >


                            <div className="flex items-center   justify-between phone:flex-col-reverse" >
                                <h2 className=" text-4xl font-normal">Stake Ramsena</h2>
                                <div className="flex items-center  justify-center gap-2 bg-gray-100   px-3 py-1 h-fit  rounded-lg w-fit" >
                                    <img loading="lazy" src={st} alt="" />
                                    <p className=" text-nowrap" >Safe & secured</p>
                                </div>
                            </div>
                            <p className=" tablet:text-center" >Stake Ramsena and earn staking rewards.</p>

                            <div>
                                <div className="relative mb-6">
                                    <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                        <img loading="lazy" src={rcoin} className="h-[30px] w-[30px] " alt="" />
                                    </div>

                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-14 py-4 " placeholder=" Ramsena Amount " />

                                </div>
                                <div className="relative mb-6">
                                    <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                        <img loading="lazy" src={rcoin} className="h-[30px] w-[30px] " alt="" />
                                    </div>

                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-14 py-4         " placeholder=" Ramsena Amount " />

                                </div>
                                <div className="relative mb-6">
                                    <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                        <img loading="lazy" src={rcoin} className="h-[30px] w-[30px] " alt="" />
                                    </div>

                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-14 py-4         " placeholder=" Ramsena Amount " />

                                </div>

                                <div className="flex justify-center" >

                                    <button type="submit" className="border-2 px-5 py-2 rounded-xl bg-yellow-500  ">
                                        Connect wallet
                                    </button>
                                </div>

                            </div>
                                <div className="flex  flex-col gap-2" >
                                    <div className="flex justify-between" >
                                        <p className="text-gray-900" >You will receive</p>
                                        <p>0.0 Ramsena</p>
                                    </div>
                                    <div className="flex justify-between" >
                                        <p className="text-gray-900" >Returns</p>
                                        <p>21% Monthly</p>
                                    </div>
                                    <div className="flex justify-between" >
                                        <p className="text-gray-900" >Token Price</p>
                                        <p>$2.2869</p>
                                    </div>
                                    <div className="flex justify-between" >
                                        <p className="text-gray-900" >Referral</p>
                                        <p>Nan</p>
                                    </div>
                                </div>



                        </div> */}
                    </div>
                </div>


            </div>

            <div className=" px-14 py-2 w-full laptop:px-10 laptop:tablet:px-2    " >
                <div id="banner-inner" className="  rounded-[10px] flex  p-5 gap-10 laptop:tablet:gap-5 flex-wrap justify-evenly">
                    <div id="banner-card" className="flex gap-2 flex-col items-center justify-center" >
                        <h5 className="text-xl text-white " >Token live price</h5>
                        <p className="text-4xl laptop:text-3xl laptop:tablet:text-2xl laptop:tablet:phone:text-2xl font-bold text-[--primary-color]" >$2.3024</p>
                    </div>

                    <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent" />

                    

                    <div id="banner-card" className="flex gap-2 flex-col items-center justify-center" >
                        <h5 className="text-xl text-white " >Total staked tokens</h5>
                        <p className="text-4xl laptop:text-3xl laptop:tablet:text-2xl laptop:tablet:phone:text-2xl font-bold text-[--primary-color]" >$0,000,0000</p>
                    </div>

                    <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent" />

                    <div id="banner-card" className="flex gap-2 flex-col items-center justify-center" >
                        <h5 className="text-xl text-white " >Total rewards paid</h5>
                        <p className="text-4xl laptop:text-3xl laptop:tablet:text-2xl laptop:tablet:phone:text-2xl font-bold text-[--primary-color]" >$0,00,000</p>
                    </div>

                    <div className="w-[3px] h-24 tablet:hidden bg-gradient-to-b from-transparent via-gray-200    via-50% to-transparent" />

                    <div id="banner-card" className="flex gap-2 flex-col items-center justify-center" >
                        <h5 className="text-xl text-white " >Stakers</h5>
                        <p className="text-4xl laptop:text-3xl laptop:tablet:text-2xl laptop:tablet:phone:text-2xl font-bold text-[--primary-color]" >$2,000</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Hero