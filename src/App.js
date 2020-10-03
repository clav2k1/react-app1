import React from 'react';
import './App.css';

function HellWorld() {
  return (
    <div id="hello">Hello World!!!</div>
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
    <div>Este es mi componente: <HellWorld/> con Funcion</div>
  );
}

export default App;
