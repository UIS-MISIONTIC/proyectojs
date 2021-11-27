import React from 'react';
import ReactDOM from 'react-dom';

function MyForm() {

    const estilosLabel = {

    color: "black",
    backgroundColor: "Orange",
    padding: "10px",
    fontFamily: "Sans-Serif"
    
}

    const myStyle = {

    color: "orange",
    fontFamily: "Sans-Serif"
        
    }
  return (
      
    <form><h4 style={myStyle}>Ingresar datos del itinerario de vuelo</h4>
    <label style={estilosLabel}>Ciudad de orígen:
        <input type="text" />
      </label>
      <label style={estilosLabel}>Ciudad destino:
        <input type="text" />
      </label>
      
    </form>
  )
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm