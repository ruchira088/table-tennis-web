import React from "react"
import classNames from "classnames"
import CreateTeamForm from "./CreateTeamForm"
import AddUsersSection from "./AddUsersSection"
import { updateArray } from "utils/general"

export default class CreateTeamPage extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            teamName: "",
            availableTeamName: false,
            users: []
        }
    }

    setValue = name => value => this.setState({[name]: value})

    addUserForm = () => {
        const { users } = this.state

        this.setState({ users: users.concat({username: "", email: "", firstName: "", lastName: ""}) })
    }

    getAddUserButton = () => {
        const { availableTeamName } = this.state

        return (
            <button
                className={classNames({"disabled": !availableTeamName})}
                onClick={this.addUserForm}
            >
                Add team member
            </button>
        )
    }

    updateUser = index => name => value => {
        const { users } = this.state

        const user = Object.assign({}, users[index], {[name]: value})

        this.setState({ users: updateArray(users, index, user) })
    }

    showAddUsersSection = () => {
        const { availableTeamName, users } = this.state

        if (availableTeamName) {
           return <AddUsersSection users={users} onUpdate={this.updateUser}/>
        } else {
            return null
        }
    }

    render() {
        const { teamName } = this.state

        return (
            <div className="create-team-page">
                <CreateTeamForm
                  value={teamName}
                  onChange={this.setValue("teamName")}
                  onAvailabilityUpdate={this.setValue("availableTeamName")}
                />
                { this.getAddUserButton() }
                { this.showAddUsersSection() }
            </div>
        )
    }
}