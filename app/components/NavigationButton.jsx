import React from "react"
import { Link } from "react-router-dom"

export default ({title, path}) => (
    <Link to={path}>
        <button>
            { title }
        </button>
    </Link>
)