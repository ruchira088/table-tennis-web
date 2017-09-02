import React from "react"
import CreateTeam from "./CreateTeam"

export default class CreateTeamPage extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            teamName: ""
        }
    }

    setValue = name => value => this.setState({[name]: value})

    render() {
        const {teamName} = this.state

        return (
            <div className="create-team-page">
                <CreateTeam value={teamName} onChange={this.setValue("teamName")}/>
            </div>
        )
    }
}