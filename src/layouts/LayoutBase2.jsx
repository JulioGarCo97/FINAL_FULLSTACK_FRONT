import { Link } from 'react-router-dom'

const LayoutBase2 = (props) => {
  return (
    <>
      <header className='bg-blue-200 py-4 px-6 text-blue font-bold flex gap-6 items-center'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>BIENVENIDO A JULIOBOX</h1>
          <nav className='flex gap-3'>
            <Link to='/'>Productos</Link>
            <Link to='/info'>Información</Link>
            <Link to='/Registrate'> Registrate</Link>
            <Link to='/ayuda'>Ayuda</Link>
            <Link to='/Products_Register'>Registra Producto</Link>
            <Link to='/Login'>Login</Link>

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

export default LayoutBase2