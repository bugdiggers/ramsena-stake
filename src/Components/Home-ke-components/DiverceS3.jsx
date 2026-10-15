 
import { Link } from "react-router-dom"
import diverceimg from "../../assets/images/diverceimg.webp"

const DiverceS3 = () => {
  return (
      <>
      <div id="diverce-main" className=" w-screen my-10 ">
        <div className="flex gap-10 px-3 justify-between w-full items-center  laptop:flex-col  " >

          <div id="left" className=" flex justify-center w-[50%] laptop:w-[100%]" >
            <img loading="lazy" src={diverceimg} alt="" />
          </div>

          <div id="right" className=" w-[40%] laptop:w-[100%] p-3  flex gap-5 flex-col  laptop:items-center ">
            <h1 className="text-5xl laptop:phone:text-3xl leading-tight laptop:text-center " >Diversify Your Staking Portfolio with Ramsena Paragraph</h1>
            <p className=" text-lg text-gray-400  laptop:text-center " >Ramsena supports a diverse range of cryptocurrencies for staking, providing you with ample opportunities to diversify your portfolio. Explore our list of supported cryptocurrencies and seize the chance to stake.</p>
            <Link to="/Stake" className=" bg-white w-fit text-black px-4 py-2  rounded-3xl " > stake now ➜ </Link>

          </div>
        </div>
      </div>
      </>
  )
}

export default DiverceS3