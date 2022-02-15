import Link from 'next/link'

function HomePage() {
    return <div style={{fontSize: '20px', color:  'red'}}>
                <h1>Welcome to Next.js!</h1>
                {/* Server side rendering */}
                {/* <a href="./about">
                    <h1>about</h1>    
                </a> */}
                <Link href="/about">
                    <button>about</button>    
                </Link>
                <Link href="/robots">
                    <button>Robots</button>    
                </Link>
            </div>
  }
  
  export default HomePage