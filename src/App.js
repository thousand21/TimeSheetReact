import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Picker from './Picker';
import Ajouter from './Ajouter';
import Form from'./Form';
import TimeSheet from './TimeSheet';
import NavBar from './components/NavBar';
import './fontawesome/index';

function App() {
  let dateAujourdhui= new Date;
  
  return (
    <div>
      <div>
        <NavBar/>
      <div>
        <h3>Nom: Van Tran</h3>

      </div>
      <div className="mr-4 btn-group " role="group">
        
         <div >
         <Picker />
         </div>
         
        <Ajouter/>
        
    </div>
    </div>

<Form/>
    


    <div className="parent">
      
        <TimeSheet/>
        

      </div>
    </div>
    
    
  );
}

export default App;
