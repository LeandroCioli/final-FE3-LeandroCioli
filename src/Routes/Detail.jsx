import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../Components/Card.module.css";
import { useGlobalContext } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const{stateTheme} = useGlobalContext()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentista, setDentista] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getDentista = () => {
    //Deberas completar este fetch con el parametro correspondiente
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(json => setDentista(json))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getDentista();
  }, []);


  return (
    <div style={{color:stateTheme.font}}>
      <h1>Detail of {dentista.name} </h1>

      <div>
      
        <div className={`${styles.detailCard}`}>
        
          <div className={`${styles.headCard}`}>
            
            <p><input onClick={() => navigate(-1)} className={`${styles.backButton}`} value="<"></input></p>
            <p>{dentista.name}</p>
            <img src="/images/doctor.jpg" className={`${styles.cardImg}`}/>
          </div>
          
          <div>
            
            <p>Contact: {dentista.phone} - {dentista.email}</p>
            <p>Website: {dentista.website}</p>
          </div>
        </div>
       
      </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail