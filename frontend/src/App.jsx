// Import external packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Home from './pages/recipes'

import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <Navbar />

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
