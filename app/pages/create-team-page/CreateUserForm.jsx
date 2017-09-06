import React from "react"
import InputSection from "components/InputSection"

export default class CreateUserForm extends React.Component
{
    constructor(props) {
        super(props)
    }
    
    render() {
        const { user: {username, email, firstName, lastName}, onUpdate } = this.props

        return (
            <div className="create-user">
                <InputSection label="Username" value={username} onChange={onUpdate("username")}/>
                <InputSection label="Email" value={email} onChange={onUpdate("email")}/>
                <InputSection label="First Name" value={firstName} onChange={onUpdate("firstName")}/>
                <InputSection label="Last Name" values={lastName} onChange={onUpdate("lastName")}/>
            </div>
        )
    }
}