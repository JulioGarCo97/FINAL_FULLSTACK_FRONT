
import { Link} from 'react-router-dom'
import LayoutBase from '../layouts/LayoutBase'
import BaseButton from "../components/shared/BaseButton"
const Home_Admin = () => {

    LayoutBase == false;


    return (
      <>
        <header value ="barra_d" className='bg-white-200 py-4 px-6 text-blue font-bold flex gap-6 items-center center'></header>
        <header value ="barra_d" className='bg-white-200 py-4 px-6 text-blue font-bold flex gap-6 items-center center'></header>
        <header value ="barra_d" className='bg-white-200 py-4 px-6 text-blue font-bold flex gap-6 items-center center'></header>
        <header value ="barra_d" className='bg-white-200 py-4 px-6 text-blue font-bold flex gap-6 items-center center'></header>
        <header value ="barra_d" className='bg-blue-200 py-4 px-6 text-blue font-bold flex gap-6 items-center center'>
        <section className="w-[640px] mx-auto bg-blue-200 py-3 px-8 mt-5 rounded-lg flex flex-col justify-between">
          <div className="flex items-center text-black gap-3 mb-10">
          </div>
       
            <h4 className="text-black font-bold flex justify-center mb-1 items-center" >Hola Campeon, ¿Que haremos hoy?</h4>
 
 
            <label className="text-black flex flex-col gap-2 mb-4">
              
            <BaseButton
                background="bg-slate-400"
                textColor="text-white"
              >
                <Link to='/Products_Register'> Agregar Productos </Link>
              </BaseButton>
 
 
            </label>          
 
           
            <label className="text-black flex flex-col gap-2 mb-4">
              
            <BaseButton
                background="bg-slate-400"
                textColor="text-white"
              >
                <Link to='/Login'>Gestor de pedidos</Link>
              </BaseButton>
              
            </label> 
            <label className="text-black flex flex-col gap-2 mb-4">
              
              <BaseButton
                  background="bg-slate-400"
                  textColor="text-white"
                >
                  <Link to='/Login'>Registrar Usuario</Link>
                </BaseButton>
              </label> 
   
        </section>
        </header>




      </>
    )
  }
  
  export default Home_Admin