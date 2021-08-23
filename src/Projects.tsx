import{ProjectsComponent} from './components/ProjectsComponent'
import siteHome from './assets/imgProjects/home.png'
import siteAmazing from './assets/imgProjects/Amazing.png'
import letmeask from './assets/imgProjects/letmeask.png'
import kanye from './assets/imgProjects/kanye.png'
export function Projects(){
    return(
        <>
        <ProjectsComponent img={siteHome} description="Projeto para alugueis de apartamentos " title="TCC Home" site="https://home-three-taupe.vercel.app" github="https://github.com/alessandrordgs/home"/>
       
       
        <ProjectsComponent img={letmeask} description="Projeto para criar sala de perguntas e respostas" title="Letmeask" site="https://letmeask-32ca4.web.app/" github="https://github.com/alessandrordgs/letmeask-nlw"/>

        <ProjectsComponent img={kanye} description="Utilizei api que fornece frases do kanye e adicionei uma função de recomedar uma musica" title="Kanye" site="https://kanye-west-alessandrordgs.vercel.app/" github="https://github.com/alessandrordgs/Kanye-west"/>
       
        <ProjectsComponent img={siteAmazing} description="Projeto para uma empresa fictícia que cria gráficos" title="Amazing Graph" site="https://amazing-graph.vercel.app/" github="https://github.com/alessandrordgs/Amazing-graph"/>
        </>
    )
}