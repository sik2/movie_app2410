import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { config } from '../data/contant'

function DetailPage() {
    const [movie, setMovie] = useState([])

    const param = useParams()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${param.id}?language=ko-KR&api_key=${config.API_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                setMovie(res)
            })
    }, [])
    return (
        <>
            <h1>{param.id}</h1>
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                width={200}
                height={200}
                alt="포스터"
            />
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
        </>
    )
}

export default DetailPage
