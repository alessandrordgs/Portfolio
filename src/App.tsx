import { useState } from 'react';
import { Header } from './components/Header'
import { FaBars } from 'react-icons/fa'
import { Button } from './components/Button';
import DevSentado from './assets/DevSentado.svg'
import Github from './assets/github.svg'
import Instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'

import './styles/responsivo.css'
import { HardSkill } from './components/HardSkill';
function App() {
  const [sidebar, setSidebar] = useState(false);
  const showsidebar = () => setSidebar(!sidebar)
  return (

    <div className="App">
      <button className="buttonSiderBar" onClick={showsidebar}> <FaBars /></button>
      {sidebar ?
        <div className="containerHeader">

          <Header title="Home" link="#" />
          <Header title="Habilidades" link="#" />
          <Header title="Projetos" link="#" />
          <Header title="Sobre mim" link="#" />
        </div> :
        null}
      <main>
        <section className='headerMain'>
          <div className="imgHeader">
            <img src={DevSentado} alt="Desenvolvedor sentado escrevendo codigo." />
          </div>
          <h1>
            Alessandro Rodrigues
           </h1>
          <span>Estudante | Dev. Front-End</span>
        </section>
        <section className='buttonContainer'>
          <Button buttonTitle="Github" link="https://github.com/alessandrordgs" icon={Github} alt="Logo do github, um gato polvo branco" />
          <Button buttonTitle="LinkedIn" link="https://www.linkedin.com/in/alessandrorodrigues2134" icon={Instagram} alt="logo do Linkedin " />
          <Button buttonTitle="Instagram" link="https://www.instagram.com/forgerdgs/" icon={linkedin} alt="a" />
        </section>

        <section>
          <h2>
            Habilidades & conhecimentos
         </h2>
          <div>
            <HardSkill />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
