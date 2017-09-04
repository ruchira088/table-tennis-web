import React from "react"
import CreateTeamForm from "./CreateTeamForm"
import CreateUserForm from "./CreateUserForm"

export default class CreateTeamPage extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            teamName: "",
            availableTeamName: false
        }
    }

    setValue = name => value => this.setState({[name]: value})

    getCreateUserForm = () => {
        const { availableTeamName } = this.state

        if (availableTeamName) {
            return <CreateUserForm/>
        } else {
            return null
        }
    }

    render() {
        const {teamName} = this.state

        return (
            <div className="create-team-page">
                <CreateTeamForm
                  value={teamName}
                  onChange={this.setValue("teamName")}
                  onAvailabilityUpdate={this.setValue("availableTeamName")}
                />
                { this.getCreateUserForm() }
            </div>
        )
    }
}