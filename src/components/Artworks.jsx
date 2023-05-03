const imgHero= "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"

const Artworks = () => {
  return (
    <div className='bg-[#151c25] gradient-bg-artworks'>
        <div className='w-4/5 py-10 mx-auto'>
            <h4 className='text-white text-3xl font-bold uppercase text-gradient'>Latest Artworks</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
            gap-6 md:gap-4 lg:gap-3 py-2.5'>
                {Array(4).fill().map((nft, i) => (
                    <Card key={i} nft={i + 1} />
                ))}
            </div>
        </div>
    </div>
  )
}

const Card = ({ nft }) => (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
        <img className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3" src={imgHero} alt={"NFT Image"} />
        <h4 className="text-white font-semibold">NFT #{nft}</h4>
        <p className="text-gray-400 text-sm my-1">This is a long paragraph section</p>

        <div className="flex justify-between items-center mt-3 text-white">
            <div className="flex flex-col">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">0.34ETH</p>
            </div>

            <button className="shadow-lg shadow-black text-sm 
            bg-[#e32970] hover:bg-[#bd255f] px-1.5 py-1 rounded-full">View Details </button>
        </div>
    </div>
)

export default Artworks