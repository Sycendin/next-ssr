import Link from 'next/link'

function HomePage() {
    return <div>
                <h1>Welcome to Next.js!</h1>
                {/* <a href="./about">
                    <h1>about</h1>    
                </a> */}
                <Link href="./about">
                    <button>about</button>    
                </Link>
            </div>
  }
  
  export default HomePage