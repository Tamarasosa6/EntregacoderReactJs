
import React from 'react';
import NavBar from './components/Navbar/Navbar';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <hr />
      <ItemListContainer color="orange" greeting="Bienvenido a la tienda de Ropa Dragon Ball"/>
    </>
  );
}

export default App;
