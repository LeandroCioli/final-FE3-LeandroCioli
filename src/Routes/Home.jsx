import React from "react";
import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';


const Home = () => {
  const {apiState} =  useGlobalContext();
    /*En este useEffect, se deben obtener todos los dentistas API
    Los almacena en un estado para luego hacer un map
    usando el componente <Card />*/
    
    /*
    useEffect(() => {
      getDentistas();
    });*/

  return (
    <main className="" >
      <div className='card-grid'>
      {apiState.length
        ? apiState.map((dentist) => {
          
            return (
                <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} enFavs={false}/>
            );
          })
        : null}
      </div>
    </main>
  )
}

export default Home;