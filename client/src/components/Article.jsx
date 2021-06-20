import React from 'react'

export default function Article({art}) {
    return (
        <div className="article">
           <h1>{art.title}</h1>
           <p>{art.body}</p> 
        </div>
    )
}
