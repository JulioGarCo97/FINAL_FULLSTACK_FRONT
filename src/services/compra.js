const url = 'http://localhost:3000/compra'

export const fetchInvoices = async () => {
  const response = await fetch(url)

  const data = await response.json()

  // console.log(data)

  return data
}

export const getInvoice = async (id) => {
  const response = await fetch(`${url}/${id}`)

  const data = await response.json()

  return data
}

const MiCompra = {
  enviarDatos: async (datos) => {
    // Realizar operaciones con los datos en el servicio
    console.log('Datos recibidos en el servicio:', datos);
    // Puedes hacer llamadas a API, procesar los datos, etc.
     Object.assign(datos, { category: "655d1a60c9fe519ae47c9cd4", excerpt: "123asd"})
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    }
  
    const response = await fetch('http://localhost:3000/api/v1/products/', options)
  
    const data = await response.json()
  
    return data
  },

  getAllDatos: async () => {
    // Realizar operaciones con los datos en el servicio
    console.log('Datos recibidos en el servicio:');
    // Puedes hacer llamadas a API, procesar los datos, etc.     
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },      
    }
  
    const response = await fetch('http://localhost:3000/api/v1/products/', options)
  
    const data = await response.json()
  
    return data
  },

  CreateCompra: async (form) => {        
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
    console.log(form, "form10");
    const response = await fetch('http://localhost:3000/api/v1/buy/', options)
    console.log(response, "response10");
    const data = await response.json()
  
    return data
  },

};


export default MiCompra;