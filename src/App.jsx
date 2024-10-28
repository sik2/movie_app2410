import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Nav from './components/Nav'
import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/list/:type" element={<MovieList />}></Route>
                <Route path="/detail/:id" element={<MovieDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
