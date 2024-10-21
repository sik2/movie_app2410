import { Link } from 'react-router-dom'

function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">홈</Link>
            </li>
            <li>
                <Link to="/sub">서브</Link>
            </li>
            <li>
                <Link to="/detail">상세</Link>
            </li>
        </ul>
    )
}

export default Nav
