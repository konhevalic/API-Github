import { useState } from "react"
import { useHistory } from "react-router-dom"

import '../../pages/SearchUser/styles.scss'
import '../../styles/button.scss'

export function Search() {
  const history = useHistory()
  const [input, setInput] = useState("")


  function onSubmitForm(event) {
    event.preventDefault()
    
    const inputTrim = input.trim()

    history.push(`${inputTrim}`)
  }

  function onChangeInput(e) {
    setInput(e.target.value)
  }

  

  return (
      <div className="search__input">
        <h1>API do Git</h1>
        <p>Pesquise por um usuário e encontre seus repositórios.</p>
        <form onSubmit={onSubmitForm} className="search__input__form">
          <input
            placeholder="Procurar github"
            type="text"
            value={input}
            onChange={onChangeInput}
            required
            
          />
          <button type="submit" className="button">Buscar</button>
        </form>
      </div>
  )
}