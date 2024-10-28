import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="flex justify-between items-center mx-10 py-2">
            <div className="flex items-center gap-12 text-lg text-white">
                <Link to="/">
                    <img
                        className="w-20 block"
                        src="data:image/png;base64,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"
                        alt="로고"
                    />
                </Link>
                <Link to="/list/popular">인기순</Link>
                <Link to="/list/top_rated">평가순</Link>
                <Link to="/list/upcoming">개봉예정</Link>
            </div>
        </div>
    )
}

export default Nav
