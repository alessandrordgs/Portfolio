import { useState } from 'react';
import DevSentado from './assets/DevSentado.svg'
import { Header } from './components/Header'
import './styles/responsivo.css'
import {FaBars} from 'react-icons/fa'
import { Button } from './components/Button';
function App() {
  const [sidebar, setSidebar] = useState(false);
  const showsidebar = () => setSidebar(!sidebar)
  return (
    
    <div className="App">
      <button className="buttonSiderBar" onClick={ showsidebar}> <FaBars/></button>
    {sidebar ?  
      <div className="containerHeader">

     <Header title="Home" link="#"/>
     <Header title="Habilidades" link="#"/>
     <Header title="Projetos" link="#"/>
     <Header title="Sobre mim" link="#"/> 
     </div>: 
      null }
    <main>
       <section className='headerMain'>
           <div className="imgHeader">
             <img src={DevSentado} alt="Desenvolvedor sentado escrevendo codigo."/>
           </div>
           <h1>
             Alessandro Rodrigues
           </h1>
           <span>Estudante | Dev. Front-End</span>
       </section>
       <section className='buttonContainer'>
         <Button buttonTitle="Github" link="https://github.com/alessandrordgs" icon={DevSentado} />
         <Button buttonTitle="LinkedIn" link="https://www.linkedin.com/in/alessandrorodrigues2134" icon={DevSentado} />
         <Button buttonTitle="Instagram" link="https://www.instagram.com/forgerdgs/" icon={DevSentado} />
       </section>
    </main>
    </div>
  );
}

export default App;
