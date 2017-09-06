import React from "react"
import CreateUserForm from "./CreateUserForm"

export default ({ users, onUpdate }) => {

    const userForms = users.map((user, index) =>
        <CreateUserForm user={user} onUpdate={onUpdate(index)} key={index}/>
    )

    return (
        <div className="add-users-section">
            { userForms }
        </div>
    )
}