import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import { AuthProvider } from "../contexts/AuthContext"


import Login from "./Components/Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>

          <Switch>
            {
            <Route path="/" component={Login} /> }
          </Switch>

      </Router>
    </div>
  )
}

export default App
