

function MovieCard({ movie: { imdbID, Year, Poster, Title, Type } }) {
  return (
  
  <>
    <div className='mt-7 shadow-lg hover:shadow-[#FDE047] ' key={imdbID}>
    <div >
     <p className="text-white bg-[#1A1A1A] pl-2">{Year}</p>
    
    </div>
    <div><img src={Poster} alt="" className=" h-64 w-56" /></div>
    <div className="bg-[#1A1A1A] flex flex-col ">
     <span className="text-white font-bold pl-2">{Type}</span>
     <h3 className="text-[#FDE047]  font-bold pl-2 h-12 w-56 overflow-hidden overflow-ellipsis">{Title}</h3>
    </div>
    </div>
  </>
  )
}

export default MovieCard
