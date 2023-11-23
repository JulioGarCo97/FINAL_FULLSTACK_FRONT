import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ayuda = () => {
    const [form, setForm] = useState({
        billFromStreetAddress: '',
        billFromCity: '',
        billFromPostCode: '',
        billToClientsName: '',
        billToClientsEmail: '',
        billToClientsStreetAddress: '',
        billToCity: '',
        billToPostCode: '',
        billToInvoiceDate: '',
        billToProjectDescription: '',
        billFromCountry: '',
        billToCountry: '',
        billToInvoicePaymentTerms: '',
      })
    
      const handleChange = (event) => {
        const { name, value } = event.target
    
        setForm({ ...form, [name]: value })
        }
    
        const handleSubmit = async (event) => {
          event.preventDefault()
      
          console.log('Enviando formulario', form)
      
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
          <nav className="w-[400px] mx-auto mt-20">
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
              <label className="text-black-bold font-bold flex-col gap-6 mb-4 flex items-center">
                  ¡NO TE PREOCUPES!.
              </label>
    
              <label className="text-black-bold flex-col gap-2 mb-4 flex items-center">
                  Lamentamos que tengas inconvenientes con nuestra plataforma, estaremos gustosos de atenderte frente a cualquier eventualidad.

                  Cualquier ayuda que necesites favor de comunicarte por los siguientes medios:

                  WPP: 9999999999999
                  MOVIL: 01 - 6666666666666 
                  CORREO: SOPORTE.FLASH@JULIOBOX.COM.PE
              <div className="flex items-center text-black gap-3 mb-10">
              </div>
    
              </label>
    
              <div className="flex flex-row justify-between gap-3">
                <label className="w-full py-4 px-5 rounded-lg bg-blue-200 basis-1/3 indent-4 md:indent-8 " onChange={handleChange}>
    
                </label>
                <label className="text-white flex flex-col gap-2 mb-4">

                </label>
                <label className="w-full py-4 px-5 rounded-lg bg-blue-200 basis-1/3 indent-4 md:indent-8 " onChange={handleChange}>
    
                </label>
              </div>
    
            </form>
          
          </section>
    
    
    
    
        </>
    )
  }
  
  export default ayuda