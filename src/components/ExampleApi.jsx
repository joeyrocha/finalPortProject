import React, { useState, useEffect} from 'react'




export default function ExampleApi() {

    const [text, setText] = useState([])

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)        
        fetch('https://tronalddump.io/tag')
        .then(response=>{
            if(!response.ok){
                throw new Error(
                    "network response not ok"
                )
            }
            return response.json()


        })
        .then(text=>{
            const fetchedText = text._embedded.tag.map(item =>({
                value:item.value,
                link:item._links.self.href
            }));
            setText(fetchedText)
        })
        .catch(error=>{
            setError(error)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[])

    if(loading){
        return <div>Loading...</div>

    }
    if(error){
        return <div>Error{error.message}</div>
    }
    return (
    <div>
        <h1>TronaldDump.io</h1>
        <ul>
            {text.map((tag,index)=>(
                <li style={{color:'white', marginLeft:'200px' }} key={index} ><a href={tag.link}>{tag.value}</a></li>
            ))}
        </ul>
    </div>
  )
}
