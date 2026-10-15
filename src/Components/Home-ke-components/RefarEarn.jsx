import cardbg from "../../assets/images/ReferEarncard.webp"

const RefarEarn = () => {
    return (
        <>
            <div id="howtostake" className=" flex flex-col  gap-40 min-h-[70vh] w-screen mb-40 "  >

                <div id="heading" className=" flex flex-col items-center gap-3  " >
                    <h1 className=" text-5xl font-bold tablet:text-4xl  text-center px-4  " >Refer And Earn Ramsena Coins </h1>
                    <p className=" text-md  text-center  max-w-[50rem] text-gray-400 px-4 " >Unlock bonus rewards by referring friends to Ramsena. Earn perks for successful referrals. Share now to enjoy together. Join Ramsena and start earning rewards today.</p>
                </div>

                <div className="flex justify-evenly gap-5 tablet:flex-wrap tablet:justify-center tablet:gap-40 px-3 " >

                    <div id="card" className=" relative max-w-[25rem] flex flex-col gap-5 justify-center items-center text-center " >
                        <img loading="lazy" className="w-full absolute" src={cardbg} alt="" />
                        <h3>Direct Referral</h3>
                        <h1 className="text-4xl  tracking-wide font-bold">
                            Get 
                            <span className="  text-[--primary-color]"> 3</span> Ramsena token
                        </h1>
                        <p className="text-gray-400 text-lg" >Refer directly and earn 3 Ramsena token back on your stake, boosting your rewards effortlessly</p>
                    </div>
                    <div id="card" className=" relative max-w-[25rem] flex flex-col gap-5 justify-center items-center text-center " >
                        <img loading="lazy" className="w-full absolute" src={cardbg} alt="" />
                        <h3>Second-tier Referral </h3>
                        <h1 className="text-4xl  tracking-wide font-bold">
                            Get   
                            <span className="  text-[--primary-color]"> 2</span>  Ramsena token
                        </h1>
                        <p className="text-gray-400 text-lg" >Refer in Second-tier   and earn 2 Ramsena token back on your stake, boosting your rewards effortlessly</p>
                    </div>
                    <div id="card" className=" relative max-w-[25rem] flex flex-col gap-5 justify-center items-center text-center " >
                        <img loading="lazy" className="w-full absolute" src={cardbg} alt="" />
                        <h3>Third-tier Referral </h3>
                        <h1 className="text-4xl   tracking-wide font-bold">
                            Get  
                            <span className="  text-[--primary-color]"> 1</span>  Ramsena token
                        </h1>
                        <p className="text-gray-400 text-lg" >Refer in Third-tier directly and earn 1 Ramsena token back on your stake, boosting your rewards effortlessly</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default RefarEarn