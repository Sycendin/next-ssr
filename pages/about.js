import Link from "next/link"
import Image from "../components/image"
function About() {
    return  <div style={{fontSize: '20px', color:  'red'}}>
                <h1>About page</h1>
                <Link href="/">
                    <button>HomePage</button>    
                </Link>
                <div>
                <Image/>
            </div>
            </div>
    
    
  }
  
  export default About