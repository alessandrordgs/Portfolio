import { useState } from 'react';

import DevSentado from './assets/DevSentado.svg'
import Github from './assets/github.svg'
import Instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'

import { FaBars } from 'react-icons/fa'

import { Header } from './components/Header'
import { Button } from './components/Button';
import { HardSkill } from './components/HardSkill';

import { Projects } from './Projects';

import './styles/responsivo.css'
function App() {
  const [sidebar, setSidebar] = useState(false);
  const showsidebar = () => setSidebar(!sidebar)
  return (

    <div className="App">
      <button className="buttonSiderBar" onClick={showsidebar}> <FaBars /> </button>
      {sidebar ?
        <div className="containerHeader" onClick={showsidebar}>
          <Header />
        </div> :
        null}
      <main>
        <section id='home' className='flexColumn headerMain'>
          <div className="imgHeader">
            <img src={DevSentado} alt="Desenvolvedor sentado escrevendo codigo." />
          </div>
          <h1>
            Alessandro Rodrigues
            </h1>
          <span>Estudante | Dev. Front-End</span>
        </section>

        <section className='flexColumn'>
          <Button buttonTitle="Github" link="https://github.com/alessandrordgs" icon={Github} alt="Logo do github, um gato polvo branco" />
          <Button buttonTitle="LinkedIn" link="https://www.linkedin.com/in/alessandrorodrigues2134" icon={Instagram} alt="logo do Linkedin " />
          <Button buttonTitle="Instagram" link="https://www.instagram.com/forgerdgs/" icon={linkedin} alt="a" />
        </section>

        <section id="skills" className="flexColumn skills">
          <h2>
            Habilidades & conhecimentos
             </h2>

          <div className="flexColumn">
            <HardSkill />
          </div>

        </section>

        <section className="flexColumn" id="projects">
          <h2>
            Projetos
            </h2>
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
