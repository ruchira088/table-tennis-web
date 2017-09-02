import React from "react"
import InputSection from "components/InputSection"

export default class CreateTeam extends React.Component
{
    constructor(props) {
        super(props)
        
        this.state = {
            availableTeamName: false
        }
    }
    
    componentWillReceiveProps(newProps) {
        
    }
    
    isAvailableTeamName(teamName) {
        
    }

    render() {
        const {teamName, onChange} = this.props
        
        return (
            <div className="create-team">
                <InputSection label="Team Name" value={teamName} onChange={onChange}/>
            </div>
        )

    }
}