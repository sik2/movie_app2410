import { useEffect, useState } from 'react'
import { detailData } from '../data/dummy'
import { useParams } from 'react-router-dom'

function DetailPage() {
    const [movie, setMovie] = useState([])

    const param = useParams()
    console.log(param)

    console.log(detailData)
    useEffect(() => {
        setMovie(detailData)
    })
    return (
        <>
            <h1>{param.id}</h1>
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
        </>
    )
}

export default DetailPage
