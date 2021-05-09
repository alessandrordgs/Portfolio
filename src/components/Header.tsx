import '../styles/components/header.css'

interface HeaderProps{
    title:string,
    link:string,
}
export function Header({title, link} :HeaderProps  ){
    return(
        <>
       
        <header>
           <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        </header>
        
        </>
    )
}