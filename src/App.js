import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./styles/styles.css";


function App(){

return (
<main>
<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
<NavBar />
</nav>
<div>
    <ItemListContainer saludo = {"Bienvenidos a EM-Componentes"}/>
</div>



</main>


)


}




export default App;