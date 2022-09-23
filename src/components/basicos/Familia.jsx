import React from "react";
import { cloneElement } from "react";

export default props => {
    //const { sobrenome } = props

    return (
        <div>
            {
                props.children.map((child, i) => {
                    return React.cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}