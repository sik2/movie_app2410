import { useState, useEffect } from 'react'
import { config } from '../data/contant'
import { Link, useParams } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import SearBox from '../components/SearBox'

function MovieList() {
    const param = useParams()
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(true)
    const [keyword, setKeyword] = useState('')
    const onChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${param.type}?language=ko-KR&api_key=${config.API_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                setMovieList(res.results)
                setLoading(false)
            })
    }, [param.type])

    return (
        <div className="p-12">
            <SearBox keyword={keyword} onChangeKeyword={onChangeKeyword} />
            <h2 className="text-xl my-10">영화목록</h2>
            <div className="flex flex-wrap justify-center">
                {movieList
                    .filter((movie) => movie.original_title.toLowerCase().includes(keyword.toLowerCase()))
                    .map((movie) =>
                        loading ? (
                            <div className="m-3" key={movie.id}>
                                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                    <Skeleton width={200} height={200} duration={2} />
                                </SkeletonTheme>
                            </div>
                        ) : (
                            <div className="m-3" key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                        width={200}
                                        height={200}
                                        alt="썸네일"
                                    />
                                    <p>{movie.original_title}</p>
                                </Link>
                            </div>
                        ),
                    )}
            </div>
        </div>
    )
}

export default MovieList
