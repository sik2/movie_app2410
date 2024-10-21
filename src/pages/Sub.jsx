import { useState, useEffect } from 'react'
import { data } from '../data/dummy'

function SubPage() {
    const [movieList, setMoiveList] = useState([])

    console.log(data.results)
    useEffect(() => {
        setMoiveList(data.results)
    }, [])
    return (
        <>
            <div>
                <ul>
                    {movieList.map((movie) => (
                        <li key={movie.id}>{movie.original_title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SubPage
