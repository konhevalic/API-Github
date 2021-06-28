import { useEffect, useState } from "react"
import { BASE_URL, client_id, client_secret } from '../../constants/urls';
import axios from 'axios'
import { useParams } from "react-router-dom";

import '../../styles/button.scss'
import './styles.scss'


export function UserDetails() {
  const { user } = useParams()
  const [userGit, setUserGit] = useState([])
  const [repo, setRepo] = useState([])

  function getUser() {
    axios
      .get(`${BASE_URL}/${user}?client_id=${client_id}&client_secret=${client_secret}`)
      .then((response) => {
        setUserGit(response.data)
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    getUser()
  }, [])


  function getRepo() {
    axios
      .get(`${BASE_URL}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`)
      .then(res => setRepo(res.data))
      .catch((error) => alert(error.message));
  }

  function getStarred() {
    axios
      .get(`${BASE_URL}/${user}/starred?client_id=${client_id}&client_secret=${client_secret}`)
      .then(res => setRepo(res.data))
      .catch((error) => alert(error.message));
  }


  return (
    <div className="details">
      <aside>
        <img className="details__userImg" src={userGit.avatar_url} alt={userGit.login} />
        <span className="details__userName" >{userGit.login}</span>
      </aside>
      <hr className="linha-vertical" />
      <div className="details__repo">
        <button className="details__repo__button" onClick={() => getRepo()}>REPOSITORIOS</button>
        <button className="details__repo__button" onClick={() => getStarred()}>COM ESTRELA</button>

        <div className="details__repo__name">
          {
            repo.map((value) => {
              return (
                <h4 key={value.name}>{value.name}</h4>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}