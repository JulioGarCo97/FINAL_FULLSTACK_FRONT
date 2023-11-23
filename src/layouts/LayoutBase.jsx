import { Link, useLocation } from 'react-router-dom'
import BaseButton from "../components/shared/BaseButton"

const LayoutBase = (props) => {
  
    const location = useLocation();

    if (location.pathname === '/SubLogin'){


      return (
        <>

 
        <section className="w-[640px] mx-auto bg-blue-200 py-3 px-8 mt-5 rounded-lg flex flex-col justify-between">
          <div className="flex items-center text-black gap-3 mb-10">
          </div>
       
            <h4 className="text-black font-bold flex justify-center mb-1 items-center" >Login JULIOBOX</h4>
 
 
            <label className="text-black flex flex-col gap-2 mb-4">
              
            <BaseButton
                background="bg-slate-400"
                textColor="text-white"
              >
                <Link to='/'> Soy Cliente </Link>
              </BaseButton>
 
 
            </label>          
 
           
            <label className="text-black flex flex-col gap-2 mb-4">
              
            <BaseButton
                background="bg-slate-400"
                textColor="text-white"
              >
                <Link to='/Login'>Yo Vendo</Link>
              </BaseButton>
            </label> 
 
        </section>
        </>
      )

    }

    return (
      <>
        <header value="barra_d" className='bg-blue-200 py-4 px-6 text-blue font-bold flex gap-6 items-center'>
          <div className='container mx-auto flex justify-between'>
            <h1 className='font-bold'>BIENVENIDO A JULIOBOX</h1>
            <nav className='flex gap-3'>
              <Link to='/'>Productos</Link>
              <Link to='/info'>Información</Link>
              
              <Link to='/SubLogin'>Login</Link>
  
            </nav>
          </div>
        </header>
        <main className='my-6'>
          <div className='container mx-auto'>
            {props.children}
          </div>
        </main>
      </>
    )
    


  }



export default LayoutBase