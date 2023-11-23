const MiServicio = {
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
    //console.log('Datos recibidos en el servicio:');
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

  getById: async (id) => {        
    // Puedes hacer llamadas a API, procesar los datos, etc.     
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },      
    }
  
    const response = await fetch('http://localhost:3000/api/v1/products/'+id, options)
  
    const data = await response.json()
  
    return data
  },

};


export default MiServicio;