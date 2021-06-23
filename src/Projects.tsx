import{ProjectsComponent} from './components/ProjectsComponent'
import siteHome from './assets/imgProjects/home.png'
import siteAmazing from './assets/imgProjects/Amazing.png'
export function Projects(){
    return(
        <>
        <ProjectsComponent img={siteHome} description="Projeto para alugueis de apartamentos " title="TCC Home" site="https://home-three-taupe.vercel.app" github="https://github.com/alessandrordgs/home"/>
       
        <ProjectsComponent img={siteAmazing} description="Projeto para uma empresa fictícia que cria gráficos " title="Amazing Graph" site="https://amazing-graph.vercel.app/" github="https://github.com/alessandrordgs/Amazing-graph"/>
       
        <ProjectsComponent img={siteHome} description="Projeto para alugueis de apartamentos " title="TCC Home" site="https://home-three-taupe.vercel.app" github="https://github.com/alessandrordgs/home"/>
       
        </>
    )
}