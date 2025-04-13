import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { DrawerPage, Home, ModalPage, RatingPage } from './pages'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/drawer/*' element={<DrawerPage />} />
                <Route path='/modal' element={<ModalPage />} />
                <Route path='/rating' element={<RatingPage />} />
            </Routes>
        </Router>
    )
}

export default App
