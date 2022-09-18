//import Main from './components/main';

import './App.css';
import Buttons from './components/buttons';
import CreateFood from './components/foods'

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="menu">
          
          <div className="title">
            <h2>React Restaurant Menu</h2>
          </div>
          
          <div className="btn-container">
              <Buttons />
          </div>
              
          <div className="section-center row">
             <CreateFood />              
          </div>
        </section>
      </div> 
                  
    </div>
  );
}

export default App;
