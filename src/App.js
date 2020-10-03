import React from 'react';
import './App.css';

function HellWorld(props) {
  console.log(props);
  
  return (
  <div id="hello">
    <h3>{props.head}</h3>
    Hello {props.txt}
  </div>
  );
}

// llamado del componente como funcion =>
// const App = () => <div>Este es mi componente: <HellWorld/> con Flecha</div>


// // llamdo del componente como clase
// class App extends React.Component {
//   render() {
//     return <div>Este es mi componente: <HellWorld/> con Clase</div>
//   }
// }


// llamado del componente como funcion
function App() {
  return (
    <div>
      Este es mi componente: 
      <HellWorld txt="clav2k1" head="Component 1"/> 
      <HellWorld txt="Clau" head="Component 2"/> 
      <HellWorld txt="Javi"/> con Funcion
    </div>
  );
}

export default App;
