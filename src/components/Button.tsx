import '../styles/components/Button.css'
interface ButtonProps{
    link:string,
    icon:string,
    buttonTitle:string,
}
export function Button ({buttonTitle,icon,link}:ButtonProps){
    return(
        <>
        <a className="a" target="_blank"  rel="noopener noreferrer" href={link}><img src={icon} alt=""/><span>{buttonTitle}</span></a>
        </>
    )
}