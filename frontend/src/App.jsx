// Import external packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import CSS Files
import './App.css'

// Pages and Components
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      
      {/* Pages Div */}
      <div className="pages">
        <Routes>
          {/* Home Page */}
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
