import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HazMemoriaPage from './pages/HazMemoriaPage';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/HazMemoria' element={<HazMemoriaPage />}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App;