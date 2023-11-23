import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import BaseButton from "../components/shared/BaseButton"
//import Login from '../pages/Home'
import MiCompra from '../services/compra'
import MiServicio from '../services/service'
const Compra = () => {

  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const response = await MiServicio.getAllDatos(); //await fetch('https://fakestoreapi.com/products')    
    //const data = await response.json()
    const results = response
    console.log(results,'RESULTSS');
    setCharacters(results.products)
    console.log(results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  const [form, setForm] = useState({
    nameClient: '',
    dniClient: '',
    directionClient: '',
    countryClient: 'Peru',
    emailClient: '',
    dateSend: '',
    typePay: '',
    description:'',
    product: '',
    totalAmount: '10',
    token: localStorage.getItem('token'),
    user:localStorage.getItem('user')
    })

  const handleChange = (event) => {
    const { name, value } = event.target
  
    setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
     /* const token = localStorage.getItem('token');
      console.log(token,'TOKEN')
      const user = localStorage.getItem('user');
      console.log(user,'USER')*/
      console.log('Enviando formulario', form)
      const resp = await MiCompra.CreateCompra(form)
       console.log(resp,'TEST 1000');
      
      const newForm = {
        "code": "XXXXX",
        "status": "draft",
        "bill": {
          "from": {
            "streetAddress": form.billFromStreetAddress,
            "city": form.billFromCity,
            "postCode": form.billFromPostCode,
            "country": "-"
          },
          "to": {
            "client": {
              "name": form.billToClientsName,
              "email": form.billToClientsEmail
            },
            "streetAddress": form.billToClientsStreetAddress,
            "city": form.billToCity,
            "postCode": form.billToPostCode,
            "country": "-"
          }
        },
        "invoice": {
          "date": form.billToInvoiceDate,
          "paymentTerms": form.billToInvoicePaymentTerms,
          "project": {
            "description": form.billToProjectDescription
          },
          "grandTotal": 0.00,
          "currency": {
            "symbol": "$"
          },
          "items": []
        }
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
          <h4 className="text-black font-bold flex justify-center mb-1 items-center" >Completa los datos para el envío</h4>


          <label className="text-black flex flex-col gap-2 mb-4">
            Producto
            <select key="product" className="text-black flex flex-col gap-2 mb-2" onChange={handleChange}>
            {/* {JSON.stringify(characters)} */}
            {characters.map(character => {
              return (
                <option className="border-blue-100 border-4 p-8 object-center" key={character._id}>{character.name}</option>

            )
            })}
            </select >

          </label>          

          
          <label className="text-black flex flex-col gap-2 mb-4">
            Dirección
            <input name="directionClient" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

          <div className="flex flex-row justify-between gap-3">
            <label className="text-black flex flex-col gap-2 mb-4">
              Ciudad
              <input name="countryClient" type="text" className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-black flex flex-col gap-2 mb-4">
              DNI
              <input  name="dniClient" type="text" className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-black flex flex-col gap-2 mb-4">
              País
              <select  className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange}>
                <option>Perú</option>
                <option>United Kingdom</option>
              </select>
            </label>
          </div>       
          <label className="text-black flex flex-col gap-2 mb-4">
            Nombres y Apellidos
            <input name="nameClient" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

          <label className="text-black flex flex-col gap-2 mb-4">
            Correo Electrónico
            <input name="emailClient" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

          <div className="flex flex-row justify-between gap-3">
            <label className="text-black flex flex-col gap-2 mb-4 basis-1/2">
              Fecha de Envío
              <input name="dateSend" type="date" className="w-full py-4 px-5 rounded-lg bg-white]" onChange={handleChange} />
            </label>
            <label className="text-black flex flex-col gap-2 mb-4 basis-1/2">
              Pago con
              <select name="typePay" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange}>
                <option>Efectivo</option>
                <option>Visa</option>
                <option>Mastercard</option>
                <option>AMEX</option>

              </select>
            </label>
          </div>

          <label className="text-black flex flex-col gap-2 mb-4">
            Indicaciones Adicionales
            <input name="description" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>


          <div className="flex justify-end gap-3">
            <BaseButton
              background="bg-slate-400"
              textColor="text-white"
            >
              <Link to='/Login'> Cancelar </Link>
            </BaseButton>
            <BaseButton
              background="bg-indigo-400"
              textColor="text-white"
            >
              Comprar y Enviar
            </BaseButton>
          </div>



        </form>


      </section>
    </>
    )
  }
  
export default Compra