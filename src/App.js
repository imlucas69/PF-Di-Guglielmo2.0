import './style.css'
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components items/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItems from './components/components items/DetailsItems';


function App() {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={ <ContainerCardItems />}/>
                <Route path='/item/:idItem' element={ <DetailsItems />} />
                <Route path='/category/:idCategory' element={ <ContainerCardItems />}/>
            </Routes>
        </BrowserRouter>
    
    );
}

export default App;
