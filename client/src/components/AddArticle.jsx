import React, { useState } from 'react'

export default function AddArticle() {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:1000/articles/add', {
                method: "POST", 
                headers: {"content-type": "application/json"},
                body: {title, body}
            })
            const data = await res.json()
            console.log(data);
        } catch (error) {
            
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title..." />
                <input type="text" placeholder="Write..." />
                <input type="submit" value="OK" />
            </form>
        </div>
    )
}
