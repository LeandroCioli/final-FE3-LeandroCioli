import React, { useState } from "react";
import { useGlobalContext } from "./utils/global.context";
const Form = () => {
  const{stateTheme} = useGlobalContext()
  
  // Aquí se definen las expresiones regulares para la validación de inputs
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const NAME_REGEX = /^[a-zA-Z]+$/;

  // Aquí se definen los estados iniciales del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Función que se llama cada vez que cambia el valor de los inputs del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función que se llama cuando se envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Se valida la información ingresada en los inputs
    if (
      formData.name.indexOf(" ") !== 0 &&
      NAME_REGEX.test(formData.name) &&
      formData.name.length > 5 &&
      EMAIL_REGEX.test(formData.email)
    ) {
      setSuccessMessage(`¡Gracias ${formData.name}! Te contactaremos cuanto antes vía mail`);
      setErrorMessage("");
      setFormData({ name: "", email: "" });
      
    } else {
      setErrorMessage("Por favor verifique su información nuevamente");
      setSuccessMessage("");

    }
  };

  return (
    <div style={{color:stateTheme.font}}>
      
      
      <div className="formHead">
        <h2>¿Quieres saber mas?</h2>
        <p>Envianos una pregunta y nos pondremos en contacto contigo</p>
      </div>
      
      <div className="msgContainer">
        
        {errorMessage != "" ?
          <div className="msgError">
          <h4>{errorMessage}</h4>
          </div> :
          successMessage != "" ?
          <div className="msgExito">
          <h4>{successMessage}</h4>
          </div> :
          <div></div>
        }
        
      </div>

      <div className="frmContainer">
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="caja">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Ingrese su Nombre"
              value={formData.name} 
              onChange={handleInputChange}
            />
          </div>

          <div className="caja">
            <input 
              type="text" 
              id="email" 
              name="email" 
              placeholder="ejemplo@ejemplo.com"
              value={formData.email} 
              onChange={handleInputChange}
            />
          </div>
          
          <button type="submit">Enviar</button>

        </form>
        
      </div>
    </div>
  );
};

export default Form;