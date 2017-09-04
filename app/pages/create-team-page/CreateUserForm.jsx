import React from "react"
import InputSection from "components/InputSection"

export default class CreateUser extends React.Component
{
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="create-user">
                <InputSection label="Username"/>
                <InputSection label="Email"/>
                <InputSection label="First Name"/>
                <InputSection label="Last Name"/>
            </div>
        )
    }
}