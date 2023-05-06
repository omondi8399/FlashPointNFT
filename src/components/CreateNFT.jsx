import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"
const imgHero= "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"

const CreateNFT = () => {
    const [modal] = useGlobalState('modal')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !description || !price) return
        console.log("Minted...")

        closeModal()
    }

    const closeModal = () => {
        setGlobalState('modal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setFileUrl('')
        setImgBase64(null)
        setTitle('')
        setDescription('')
        setPrice('')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#e32070] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>

            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold'>Add NFT</p>
                    <button type="button" onClick={closeModal} className="border-0 bg-transparent focus:outline-none">
                        <FaTimes />
                    </button>
                </div>
                <div className="flex justify-center items-center rounded-xl mt-5"> 
                    <div className="shrink-0 h-20 w-20 rounded-xl overflow-hidden">
                        <img className="h-full w-full object-cover cursor-pointer" src={imgBase64 || imgHero} alt="NFT" />
                    </div>
                </div>
                <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                    <label className="block">
                        <span className="sr-only">Choose Profile Photo</span>
                        <input type="file" accept="image/png, image/gif, image/jpg, image/webp" 
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
                        file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none
                        cursor-pointer focus:ring-0" required
                        />
                    </label>
                </div>

                <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                <input type="text" className="block w-full text-sm text-slate-500 focus:outline-none
                        cursor-pointer focus:ring-0 bg-transparent border-0" 
                        placeholder="Title" name="title" 
                        onChange={(e) => setTitle(e.target.value)} value={title} required 
                        />
                </div>

                <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                <input type="number" className="block w-full text-sm text-slate-500 focus:outline-none
                        cursor-pointer focus:ring-0 bg-transparent border-0" placeholder="Price (ETH)" 
                        min={0.01} step={0.01}  name="price" 
                        onChange={(e) => setPrice(e.target.value)} value={price} required 
                        />
                </div>

                <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                <textarea type="text" className="block w-full text-sm text-slate-500 focus:outline-none
                        cursor-pointer focus:ring-0 bg-transparent border-0 h-20 resize-none" 
                        placeholder="Description" name="description"
                        onChange={(e) => setDescription(e.target.value)} value={description} required 
                        ></textarea>
                </div>

                <button className="flex justify-center items-center shadow-lg shadow-black text-white 
                p-2 mt-5 bg-[#e32970] hover:bg-[#bd255f] rounded-full">Mint Now </button>
            </form>
        </div>
    </div>
  )
}

export default CreateNFT