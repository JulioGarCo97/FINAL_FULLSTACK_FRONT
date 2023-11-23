
import { Link, useNavigate, useLocation } from "react-router-dom"
import React, { useState } from 'react';
import BaseButton from "../components/shared/BaseButton"
import dato_login from '../services/logeo'



function LoginForm() {


 
    const navigate = useNavigate();
    const [form, setForm] = useState({
 
 
        username: '',
        password:'',
 
      })
 
    const handleChange = (event) => {
      const { name, value } = event.target
   
      setForm({ ...form, [name]: value })
      }

 
    const handleSubmit = async (event) => {
      event.preventDefault()
  
      
      const resp = await dato_login.enviarDatos_login(form)

      if(resp.ok === true) {

        navigate('/Home_admin')

        return null



        
      }
      

        const token = resp.token;
        const user = resp.user.username;

        // Guardar el token en localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);




      
  
      const newForm = {
  



          "username": form.username,
          "password": form.password,


            


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
            <h4 className="text-black font-bold flex justify-center mb-1 items-center" >Login JULIOBOX</h4>
 
 
            <label className="text-black flex flex-col gap-2 mb-4">
              Usuario:
              <input name="username" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
 
 
            </label>          
 
           
            <label className="text-black flex flex-col gap-2 mb-4">
              Contraseña:
              <input name="password" type="password" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
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
                Ingresar
              </BaseButton>
            </div>
 
 
 
          </form>
 
 
        </section>
      </>
      )
    }
 
 
export default LoginForm;