import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Sub from './pages/Sub'
import Detail from './pages/Detail'
import Nav from './components/Nav'

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/sub" element={<Sub />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
