import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import App from './App'
import Home from './Home'
import ReduxExample from './ReduxExample'
const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/">Home</Link> |{" "}
                <Link to="about">About</Link> | {" "}
                <Link to="test">Test Redux</Link>
                <Routes>
                    <Route path="/" element={<App />} ></Route>
                    <Route index element={<Home />} ></Route>
                    <Route path='about' element={<About />} ></Route>
                    <Route path="test" element={<ReduxExample />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes