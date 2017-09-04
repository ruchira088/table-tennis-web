import React from "react"
import { exists as teamExists } from "services/teamService"
import InputSection from "components/InputSection"
import LoadingIcon from "components/LoadingIcon"

const isTeamNameAvailable = teamName => teamExists(teamName).then(exist => !exist)

export default class CreateTeam extends React.Component
{
    constructor(props) {
        super(props)
        
        this.state = {
            fetching: false
        }
    }
    
    componentWillReceiveProps({value: newValue}) {
        const { value, onAvailabilityUpdate } = this.props

        if (value !== newValue) {
            if (newValue.trim().length > 0) {
              this.setState({ fetching: true })

              isTeamNameAvailable(newValue)
                .then(available => {
                  this.setState({fetching: false})
                  onAvailabilityUpdate(available)
                })
            } else {
              onAvailabilityUpdate(false)
            }
        }
    }

    getLoadingIcon = () => {
        const { fetching } = this.state

        if(fetching) {
            return <LoadingIcon/>
        } else {
            return null
        }

    }
    
    render() {
        const { teamName, onChange } = this.props
        
        return (
            <div className="create-team">
                <InputSection label="Team Name" value={teamName} onChange={onChange}/>
                { this.getLoadingIcon() }
            </div>
        )

    }
}