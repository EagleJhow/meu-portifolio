import Image from 'next/image'

import './styles/header.scss'

export function Header(){
    return(
        <div className="header">
            <div>
              <h1>Hi, i´m Jhonatan! 👋</h1>
              <h2>Developer Full-Stack</h2>
            </div>
            <Image
              src="/me.jpeg"
              alt="Vercel Logo"
              width={325}
              height={310}
              priority
            />
        </div>
    )
}