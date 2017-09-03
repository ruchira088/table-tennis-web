import React from "react"
import InputSection from "components/InputSection"
import { exists as teamExists } from "services/teamService"

const isTeamNameAvailable = teamName => teamExists(teamName).then(exist => !exist)

export default class CreateTeam extends React.Component
{
    constructor(props) {
        super(props)
        
        this.state = {
            availableTeamName: false,
            fetching: false
        }
    }
    
    componentWillReceiveProps({value: newValue}) {
        const { value } = this.props

        if (value !== newValue && newValue.trim().length > 0) {
            this.setState({ fetching: true })

            isTeamNameAvailable(newValue)
                .then(available => {
                    this.setState({availableTeamName: available, fetching: false})
                })
        } else {
            this.setState({availableTeamName: false})
        }
    }
    
    render() {
        const { teamName, onChange } = this.props
        
        return (
            <div className="create-team">
                <InputSection label="Team Name" value={teamName} onChange={onChange}/>
            </div>
        )

    }
}