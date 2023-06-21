import { SectionTitle } from '../sectionTitle/section-title'
import './information.scss'

export function Info(){
    return(
        <div className='infos'>
        <SectionTitle text='Languages'/>
        <div className="languages-info">
          <span>🇺🇸 EN- Fluent</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text='Education'/>
        <div className='education-info'>
          <span>🎓</span>
          <span>Cursando Analise e Desenvolvimento de Sistemas - Fatec</span>
        </div>
      </div>
    )
}