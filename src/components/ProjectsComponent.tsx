import '../styles/components/projects.css'
import {HiCode} from 'react-icons/hi'
import {AiOutlineGithub} from 'react-icons/ai'
interface ProjectsProps{
 img:string,
 title:string;
 site:string;
 github:string;
}
export function ProjectsComponent({github,img,site,title} : ProjectsProps){
    return(
        <div className="project flex">
            <div className="flex projectImg">
                <img src={img} alt="" />
            </div>
            <div className="flexColumn">
                <h2>{title}</h2>
                <div className="buttonContainer">
                    <button ><a target="_blank" className="flex"  rel="noopener noreferrer" href={site}><HiCode size={25}/><p>Website</p></a></button>
                    <button><a target="_blank" className="flex"  rel="noopener noreferrer" href={github}><AiOutlineGithub size={25}/><p>Github</p></a></button>
                </div>
            </div>
        </div>
    )
}