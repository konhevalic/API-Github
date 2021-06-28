import { BrowserRouter, Switch, Route } from "react-router-dom"
import {SearchUser} from '../pages/SearchUser'
import { UserDetails } from "../pages/UserDetails"
import { ErrorPage } from "../pages/ErrorPage"

export function Router() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <SearchUser />
            </Route>
            <Route path="/:user">
              <UserDetails />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
}