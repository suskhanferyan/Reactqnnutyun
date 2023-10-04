import {Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Kids from './Kids';
import Men from './Men';
import Women from './Women';
import Sale from './Sale';
import Layout from './Layout';
import Singn from './Singn';
import Footer from './Footer';

function App() {
     return (
    <div className="App ">
       <Routes>
         <Route path='/' element ={<Layout />}>
          <Route path='navbar' element ={<Navbar />}/>
          <Route path='kids' element ={<Kids />}/>
          <Route path='men' element ={<Men />}/>
          <Route path='women' element ={<Women />}/>
          <Route path='sale' element ={<Sale />}/>
          <Route path='singn' element ={<Singn />}/>
          <Route path='footer' element ={<Footer />}/>
         </Route>
       </Routes>
      </div>
      
  
  );
}
export default App;
