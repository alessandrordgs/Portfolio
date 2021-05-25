
export function About({user}:any){
    return(
        <div>
       
        </div>
    )
}
export const github = async () => {
    const response = await fetch('https://api.github.com/users/alessandrordgs')
    const user = await response.json()
    console.log(user)
    return(user)
}  