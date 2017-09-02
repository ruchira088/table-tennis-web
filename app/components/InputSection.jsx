import React from "react"
import classNames from "classnames"

export default ({ label, value, onChange, className }) => (
    <div className={classNames("input-section", className)}>
        <div className="input-section-label"> { label } </div>
        <div className="input-section-field">
            <input onChange={({target}) => onChange(target.value)} value={value}/>
        </div>
    </div>
)