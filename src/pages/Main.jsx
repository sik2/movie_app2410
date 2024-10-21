import { useEffect, useState } from 'react'
import { data } from '../data/dummy'
import { Link } from 'react-router-dom'

function MainPage() {
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
                        <li key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>{movie.original_title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MainPage
