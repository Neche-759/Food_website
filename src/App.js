
import './App.css';
import { Bookhome, Booktable } from './book components/book home';
import { Contacthome } from './contact components/contacthome';
import { Menuhome } from './menu components/menuhome';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
   return(
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Menuhome />} ></Route>
       <Route path="/booktable" element={<Booktable />} ></Route>
       <Route path="/Menu" element={<Menuhome />} ></Route>
       <Route path="/contact" element={<Contacthome />} ></Route>

     </Routes>
     </BrowserRouter>

   );
}

export default App;
