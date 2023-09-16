import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

import { useGlobalContext } from "./utils/global.context";

const Card = ({name, username, id, enFavs}) => {
  //const {theme} =useContext(ThemeContext)
  const{stateTheme} = useGlobalContext()

  const { setArr } = useGlobalContext();
  const [selectedDentist, setSelectedDentist] = useState();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
  fetch(url)
      .then((res) => res.json())
      .then((data) => setSelectedDentist(data));
  }, [url]);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const array = JSON.parse(localStorage.getItem('arr'));
    const existsDentist = array.find((elemento) => elemento.id === selectedDentist.id);
    if (existsDentist) {
        console.log('No se puede agregar dentista ya existe');
    } else {
        alert(`Se añadió a ${selectedDentist.name} a favoritos`);
        array.push(selectedDentist);
        localStorage.setItem('arr', JSON.stringify(array));
        setArr(array);
    }
  }


  const removeFav = () => {
    const array = JSON.parse(localStorage.getItem("arr"));
    const index = array.findIndex((elemento) => elemento.id === selectedDentist.id);
    if (index > -1) {
        array.splice(index, 1);
        localStorage.setItem("arr", JSON.stringify(array));
        setArr(array);
    }
  };

  return (
    <div className="card" style={{background:stateTheme.backCard, color:stateTheme.font}}>
        {/* En cada card deberan mostrar en name - username y el id */}
       
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img className={`${styles.cardImg}`} src="/images/doctor.jpg"/>
        <div className="cardText">
          <p>{name}</p>
          <p>{username} </p>
        </div>
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/detail/${id}`}> 
          <button className="detailButton">Details</button>
        </Link>

        {enFavs ?
          <button onClick={removeFav} className="favButton">
          Eliminar de favoritos
          </button> :
          <button onClick={addFav} className="favButton">Add fav</button>
        }

        
    </div>
  );
};

export default Card;
