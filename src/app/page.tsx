import { Experience } from './components/experience/experience'
import { Header } from './components/header'

import './components/styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
        <Header/>
        <Experience/>
        <div className='infos'>
          <h3>Languages</h3>
          <div className="languagesinfo">
            <span>🇺🇸 EN- Fluent</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className='education-info'>
            <span>🎓</span>
            <span>Cursando Analise e Desenvolvimento de Sistemas - Fatec</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>contact me</button>
        </div>
    </main>
  )
}
