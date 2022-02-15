import Link from "next/link";
import fetch from 'isomorphic-unfetch'

const Robots = (props) =>{
    return (
        <div> 
        <h1>Robots</h1>
        <Link href='/'>
            <button>Home</button>
        </Link>
        <div>
            {
                props.robots.map(robot => (
                    <li key={robot.id}>
                        <Link href={`robots/${robot.id}`}>
                        <a>{robot.name}</a>
                        </Link>
                        

                    </li>
                ))
            }
        </div>
        </div>
    )
}
//Before we load up robots, get the data for it and load it up as robots
Robots.getInitialProps = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        robots: data
    }
}
export default Robots;