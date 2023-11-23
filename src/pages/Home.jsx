import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MiServicio from '../services/service'

const Home = () => {
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const response = await MiServicio.getAllDatos(); //await fetch('https://fakestoreapi.com/products')    
    //const data = await response.json()
    const results = response
    console.log(results,'RESULTSS');
    setCharacters(results.products.filter(item => item.status === true))
    console.log(results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <>
      <h2 className="text-3xl mb-3">SELECCIONA EL PRODUCTO:</h2>
      <div class="bg-blue-800 h-1 border-blue-300 border-4 p-2 w-[1019px] mx-auto  py-3 px-20 mt-50 rounded-lg flex flex-col justify-between"></div>

      {/* {JSON.stringify(characters)} */}

       {characters.map(character => {
        return (
          <article class="border-blue-100 border-4 p-8 object-center" key={character._id}>
            <Link to={`/character/${character._id}`}>{character.name}</Link>
          </article>
        )
       })}

      <Link to='/login'>Login</Link>
    </>
  )
}

export default Home