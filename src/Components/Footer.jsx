import React from 'react'
import styles from "./Footer.module.css";
const Footer = () => {
  
  return (
    <footer>
      <div className="footerDerechos">
        <h2>Dentist App</h2>
        <p>Hecho por Leandro Cioli</p>
        <small>All rights reserved ©</small>
      </div>
      <div className={`${styles.footerRedes}`}>
        <img src="/images/ico-facebook.png" alt="ícone do facebook" className={styles.icon} />
        <img src="/images/ico-instagram.png" alt="ícone do instagram" className={styles.icon} />
        <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className={styles.icon} />
        <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className={styles.icon} />
      </div>
    </footer >
  )
}

export default Footer
