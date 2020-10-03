import React from 'react';
import './App.css';

//// componente como funcion
// function HellWorld(props) {
//   console.log(props);
  
//   return (
//   <div id="hello">
//     <h3>{props.head}</h3>
//     Hello {props.txt}
//   </div>
//   );
// }

// componente como clase
class HellWorld extends React.Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      
      return (
        <div id="hello">
          <h3>{this.props.head} con Clase</h3>
          Hello {this.props.txt}
          <button onClick={ this.toggleShow }>Cambia Estado</button>
        </div>
        );

    } else {
      return <h1>No hay Informacion <button onClick={ this.toggleShow }>Cambia Estado</button></h1>
    }
  }
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
      <HellWorld txt="Javi"/> 
    </div>
  );
}

export default App;
