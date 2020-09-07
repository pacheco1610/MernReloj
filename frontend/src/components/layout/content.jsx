import React from 'react'

export default function content(props) {
    return (
        <div id="content" class="container-fluid p-4">
           {props.children} 
        </div>
    )
}
