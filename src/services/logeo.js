
export const dato_login = {
    enviarDatos_login: async  (datos) => {
        console.log('Datos login:', datos);
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          }
       
          const response = await fetch('http://localhost:3000/api/v1/auth/login', options)
       
          const data = await response.json()

          console.log(data, "data")
 
          const token = data.token;
          localStorage.setItem("token", token);
       
          return data

          
 
 
    },
  };
 
  export default dato_login