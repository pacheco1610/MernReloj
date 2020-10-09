import React from 'react'

export default function content(props) {
    return (
        <div id="content" className="container-fluid p-4">
           {props.children} 
        </div>
    )
}
