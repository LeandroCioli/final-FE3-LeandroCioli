import React from 'react'

import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import {  useGlobalContext } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  //const {theme,handleChangeTheme} = useContext(ThemeContext);

  const {stateTheme, dispatchTheme} =  useGlobalContext()

  const changeTheme = ()=>{
    if (stateTheme.t) {
      dispatchTheme({type: 'DARK'}) 
    } else {dispatchTheme({type: 'LIGHT'})} 
  }
 
  return (
    /*<nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas }
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button }
      <button>Change theme</button>
    </nav>*/

    <header>
        <nav className={`${styles.headerNav}`}>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/favs"}>Favs</Link></li>
            </ul>
        </nav>
        <li className={`nav-item`}>
            {/* Al hacer clic en este botón, la aplicación cambiará al modo oscuro o al modo claro.
              Recuerde utilizar un estado en contexto para realizar este cambio.
              En la siguiente línea se debe realizar una prueba si la aplicación
              está en modo oscuro y debe usar el ícono ☀ o 🌙 y btn-dark o btn-light*/}
            <div className='dark_mode'>
              
              <input
                  className='dark_mode_input'
                  type='checkbox'
                  id='darkmode-toggle'
                  onClick={changeTheme}
              />
              <label className='dark_mode_label' for='darkmode-toggle'>
                  <img src="../../public/images/Sun.svg" alt="" />
                  <img src="../../public/images/Moon.svg" alt="" />
              </label>
            </div>
        </li>
        
    </header>

  )
}

export default Navbar