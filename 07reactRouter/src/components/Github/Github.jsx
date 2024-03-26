import React, {useState, useEffect} from 'react'
//import {useLoaderData} from 'react-router-dom'

function Github(){

    //const data = useLoaderData()

    const [data, setData] = useState([])

    useEffect( () => {
        fetch('https://api.github.com/users/MdSajidAli18')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

    return (
        <div className='text-center m-3 bg-gray-600 text-white p-2 text-2xl'>
            Github followers: {data.followers}
            <img className='text-center' src={data.avatar_url} alt= "Git picture" width={150} />
        </div>
    )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/MdSajidAli18')
//     return response.json()
// }