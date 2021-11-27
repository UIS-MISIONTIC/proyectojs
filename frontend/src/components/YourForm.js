import React from 'react';
import ReactDOM from 'react-dom';

function YourForm() {

    const estiloLabel = {

    color: "black",
    backgroundColor: "Orange",
    padding: "10px",
    fontFamily: "Sans-Serif"
    
}

    const yourStyle = {

    color: "orange",
    fontFamily: "Sans-Serif"
        
    }
  return (
      
    <form><h4 style={yourStyle}>Ingresar datos de orígenes y destinos </h4>
     <label style={estiloLabel}>Aeropuerto:
        <input type="text" />
      </label>
      <label style={estiloLabel}>Ciudad:
        <input type="text" />
      </label>
      <label style={estiloLabel}>País:
        <input type="text" />
      </label>
    </form>
  )
}
ReactDOM.render(<YourForm />, document.getElementById('root'));

export default YourForm