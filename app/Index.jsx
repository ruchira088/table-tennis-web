import React from "react"
import ReactDOM from "react-dom"

const root = document.getElementById("react-app")

const HelloWorld = () => (
    <div>
        Hello World
    </div>
)

ReactDOM.render(<HelloWorld/>, root)