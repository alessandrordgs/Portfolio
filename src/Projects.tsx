import{ProjectsComponent} from './components/ProjectsComponent'
import siteHome from './assets/imgProjects/home.png'
export function Projects(){
    return(
        <>
        <ProjectsComponent img={siteHome} title="TCC Home" site="https://home-three-taupe.vercel.app" github="https://github.com/alessandrordgs/home"/>
        <ProjectsComponent img={siteHome} title="TCC Home" site="https://home-three-taupe.vercel.app" github="https://github.com/alessandrordgs/home"/>
        <ProjectsComponent img={siteHome} title="TCC Home" site="https://home-three-taupe.vercel.app" github="https://github.com/alessandrordgs/home"/>
        </>
    )
}