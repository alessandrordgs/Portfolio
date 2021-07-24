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

import './styles/main.css'
import { About } from './components/About';

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
        
        <div className="containerMain">
          <section id='home' className='flexColumn headerMain'>
            <div className="imgHeader">
              <img src={DevSentado} alt="Desenvolvedor sentado escrevendo codigo." />
            </div>
           
          </section>

          <section className='flexColumn'>
          <h1>
              Alessandro Rodrigues
              </h1>
            <span>Estudante | Dev. Front-End</span>
            <Button buttonTitle="Github" link="https://github.com/alessandrordgs" icon={Github} alt="Logo do github, um gato polvo branco" />
            <Button buttonTitle="LinkedIn" link="https://www.linkedin.com/in/alessandrorodrigues2134" icon={linkedin} alt="logo do Linkedin " />
            <Button buttonTitle="Instagram" link="https://www.instagram.com/forgerdgs/" icon={Instagram} alt="a" />
          </section>
        </div>

        <div className="flex about">
            <section id="skills" className="flexColumn skills">
              <h2>
                Habilidades & conhecimentos
                </h2>

              <div className="flexColumn">
                <HardSkill />
              </div>

            </section>
            
            <section className="about-section">
              <h1>Sobre mim</h1>
                <About/>
            </section>
        </div>

        <section className="flexColumn projectsDesktop" id="projects">
          <h2>Projetos</h2>
         <div className="projectsDesktop">
         <Projects />
         </div>
        </section>
      </main>
    </div>
  );
}

export default App;
