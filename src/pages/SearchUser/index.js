import { Search } from "../../components/Search"
import logoImg from '../../assets/images/logo.png'

import './styles.scss'

export function SearchUser() {
  return (
    <div className="search">
      <aside className="search__logo">
        <img src={logoImg} alt="Logo do github"/>
      </aside>
      <Search className="search__input" />
    </div>
  )
}