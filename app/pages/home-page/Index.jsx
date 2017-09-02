import React from "react"
import NavigationButton from "components/NavigationButton"

export default () => (
    <div className="home-page">
        <NavigationButton title="New Result" path="new-result"/>
        <NavigationButton title="Create Team" path="create-team"/>
    </div>
)