import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"

const imgHero= "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"


const ShowNFT = () => {

    const [modal] = useGlobalState('showModal')
    

    const handleSubmit = () => {

        closeModal()
    }

    const closeModal = () => {
        setGlobalState('showModal', 'scale-0')
    }


    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50
        transform transition-transform duration-300 ${modal}`}>
            <div className='bg-[#151c25] shadow-xl shadow-[#e32070] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
    
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center text-gray-400'>
                        <p className='font-semibold'>Buy NFT</p>
                        <button type="button" onClick={closeModal} className="border-0 bg-transparent focus:outline-none">
                            <FaTimes />
                        </button>
                    </div>
                    <div className="flex justify-center items-center rounded-xl mt-5"> 
                        <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
                            <img className="h-full w-full object-cover cursor-pointer" src={imgHero} alt="NFT" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start rounded-xl mt-5">
                        <h4 className="text-white font-semibold">Title</h4>
                        <p className="text-gray-400 text-xs my-1">This is a huge paragraph</p>

                        <div className="flex justify-between items-center mt-3 text-white"></div>
                    </div>
    
                    <div className="flex justify-between items-center space-x-2">
                        <button className="flex justify-center items-center shadow-lg shadow-black text-white 
                        p-2 mt-5 w-full bg-[#e32970] hover:bg-[#bd255f] rounded-full">Purchase </button>

                        <button className="flex justify-center items-center shadow-lg shadow-black text-white 
                        p-2 mt-5 w-full bg-[#e32970] hover:bg-[#bd255f] rounded-full">Change Price </button>
                    </div>
                </div>
            </div>
        </div>
    
    )

}

export default ShowNFT