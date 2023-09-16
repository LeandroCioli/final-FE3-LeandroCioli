import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const{stateTheme} = useGlobalContext()
  const favoritos =  JSON.parse(localStorage.getItem("arr"))
 
  return (
    <div style={{color:stateTheme.font}}>
      {favoritos.length ?
      <div className="fav vista">
        
        <h1>Dentistas favoritos</h1>
        <div className="card-grid">
          
          {favoritos.map((favorito) => 
          <Card key={favorito.id} name={favorito.name} username={favorito.username} id={favorito.id} enFavs={true}/>
          )}
        </div>
      </div>
        :
        <div className="favVacioContainer">
          <h1>No tienes ningún dentista en favoritos</h1>
          <img src="/images/favsVacio.gif"/>
          <small>En la Home Page puedes añadir cualquier dentista a tus favoritos</small>
        </div> 
      } 
    </div>
  );
};

export default Favs;
