import { Link } from 'react-router-dom'

function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">홈</Link>
            </li>
            <li>
                영화리스트
                <ul>
                    <li>
                        <Link to="/list/popular">인기순</Link>
                    </li>
                    <li>
                        <Link to="/list/top_rated">평가순</Link>
                    </li>
                    <li>
                        <Link to="/list/upcoming">개봉예정</Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Nav
