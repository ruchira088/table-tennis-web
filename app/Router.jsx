import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./pages/home-page/Index"
import NewResultPage from "./pages/new-result-page/Index"
import CreateTeamPage from "./pages/create-team-page/Index"
import Banner from "components/Banner"

export default () => (
    <Router>
        <div className="router-container">
            <Banner/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/create-team" component={CreateTeamPage}/>
            <Route path="/new-result" component={NewResultPage}/>
        </div>
    </Router>
)