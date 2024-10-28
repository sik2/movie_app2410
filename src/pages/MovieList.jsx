import { useState, useEffect } from 'react'
import { config } from '../data/contant'
import { Link, useParams } from 'react-router-dom'

function MovieList() {
    const [movieList, setMoiveList] = useState([])

    const param = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${param.type}?language=ko-KR&api_key=${config.API_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                setMoiveList(res.results)
            })
    }, [param.type])
    return (
        <>
            <div>
                <ul>
                    {movieList.map((movie) => (
                        <li key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                width={200}
                                height={200}
                                alt="썸네일"
                            />
                            <Link to={`/detail/${movie.id}`}>{movie.original_title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MovieList
