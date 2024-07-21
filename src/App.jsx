// import { useCallback, useState } from 'react'
import { FaSearch } from "react-icons/fa";
// import './App.css'
import { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";




// 9a8bca2c
const API_URL = 'http://www.omdbapi.com/?apikey=9a8bca2c';
const movie ={
  
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

function App() {

  const [movies , setmovies] = useState([]);
  const [serachTerm, setSearchTerm] = useState("");
 
const searchMovie = async (title)=>{

  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setmovies(data.Search);
}
  useEffect(()=>{
    searchMovie('Batman')
  }, [])
 
  return (
    <>
      <div className='bg-black'>
     <h1 className='flex justify-center  mt-9 text-4xl text-[#FDE047]' >Movie Search App</h1>
     <div className=' flex flex-row justify-center'>
      <input type="text" className='h-12 w-[20rem] mt-5 rounded-3xl ml-4 p-4 md:w-[45rem]' value={serachTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Latest Movies Here" /> 
   <button className="bg-white h-12 mt-5 ml-2 w-20 mr-3 rounded md:w-24 md:mr-0 md:ml-4"  onClick={()=>searchMovie(serachTerm)} >Search</button>
   
     </div>
  

   {movies?.length > 0 ? (
          <div className="flex flex-raw flex-wrap mt-9 justify-evenly p-5  ">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
       </div>
      
    </>
  )
}
export default App
