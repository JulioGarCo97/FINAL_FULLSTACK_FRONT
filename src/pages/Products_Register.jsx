import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import BaseButton from "../components/shared/BaseButton"

import MiServicio from '../services/service'


const Products_Register = () => {
  
  const [form, setForm] = useState({


      name: '',
      description:'',
      price:'',
      stock:'',
      image:'',
      category:'',
      status:'',
      code:'',
    })

  const handleChange = (event) => {
    const { name, value } = event.target
  
    setForm({ ...form, [name]: value })
    }
    const mandaForm=()=>{
        //MiServicio.enviarDatos(form)
        MiServicio.enviarDatos(form)
        //console.log(form);
      };

    const handleSubmit = async (event) => {
      event.preventDefault()
  
      console.log('Enviando formulario', form)

      
      
  
      const newForm = {  
        
        "name": form.name,
        "description": form.description,
        "price": form.price,
        "stock": form.stock,
        "image": form.image,
        //"category": form.category,
        "status": form.status,            
        "code": form.code,

      }
    }


  


  return (
    <>
      <nav className="w-[640px] mx-auto mt-20">
        <Link
          to='/'
          className="text-white font-bold flex gap-3 items-center "
        >
          
        </Link>
      </nav>

      {/* <pre className="text-white">{JSON.stringify(form, null, 2)}</pre> */}

      <section className="w-[640px] mx-auto bg-blue-200 py-3 px-8 mt-5 rounded-lg flex flex-col justify-between">
        <div className="flex items-center text-black gap-3 mb-10">
        </div>
      

        <form onSubmit={handleSubmit}>
          <h4 className="text-black font-bold flex justify-center mb-1 items-center" >Registro de Producto</h4>


          <label className="text-black flex flex-col gap-2 mb-4">
            Nombre del Producto
            <input name="name" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />


          </label>          

          
          <label className="text-black flex flex-col gap-2 mb-4">
            Descripción
            <input name="description" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

          <div className="flex flex-row justify-between gap-3">
            <label className="text-black flex flex-col gap-2 mb-4">
              Precio
              <input name="price" type="img" className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-black flex flex-col gap-2 mb-4">
              Stock
              <input name="stock" type="text" className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-black flex flex-col gap-2 mb-4">
              Foto
              <input name="image" type="text" className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange} disabled />
            </label>
          </div>       
          <label className="text-black flex flex-col gap-2 mb-4">
            Categoria
            <input name="category" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

          <label className="text-black flex flex-col gap-2 mb-4">
            Estado
            <select name="status" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} >
               <option ></option>
               <option value="0">NO DISPONIBLE</option>
               <option value="1">DISPONIBLE</option>
            </select>
          </label>
          <label className="text-black flex flex-col gap-2 mb-4">
            Código
            <input name="code" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

    

          <div className="flex justify-end gap-3">
            <BaseButton
              background="bg-slate-400"
              textColor="text-white"
            >
              <Link to='/'> Cancelar </Link>
            </BaseButton>
            <BaseButton
              background="bg-indigo-400"
              textColor="text-white"


              
            >
              <Link to='/' onClick={mandaForm}> Registrar Producto </Link>
            </BaseButton>
          </div>



        </form>


      </section>
    </>
    )
  }
  
export default Products_Register