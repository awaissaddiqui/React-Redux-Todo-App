import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from './Create';
import Update from './Update';

function App() {
    return (
        <div>
            <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/create' element={<Create/>} />
                <Route path='/update/:id' element={<Update/>}/>
                
            </Routes>
            </Router>
            
        </div>
    );
}

export default App;