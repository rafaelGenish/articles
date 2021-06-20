import React, { useEffect, useState } from 'react'
import Article from './Article'

export default function Articles() {

    const [articlesList, setArticlesList] = useState([])


    useEffect(() => {
        (async () => {
            let res = await fetch('http://localhost:1000/articles')
            let data = await res.json()
            setArticlesList(data)
            console.log(data);
        })()
    }, [])

    return (
        <div className="articles">
            {articlesList.map(a => (<Article art={a} key={a.id} />))}
        </div>
    )
}
