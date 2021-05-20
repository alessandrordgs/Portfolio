import '../styles/components/header.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FaLaptopCode} from 'react-icons/fa'
import {BsCode} from 'react-icons/bs'
import {FiUser} from 'react-icons/fi'


export function Header(){
    return(
        <>
       
        <header>
           <nav>
               <a href="#home"><HiOutlineHome size={25}/> <p>Home</p></a>
               <a href="#skills"><BsCode size={25}/> <p>Habilidades</p></a>
               <a href="#projects"><FaLaptopCode size={25}/><p>Projetos</p></a>
               <a href="#about"><FiUser size={25}/><p> Sobre</p></a>
           </nav>
        </header>
        
        </>
    )
}