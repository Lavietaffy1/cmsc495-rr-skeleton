// React-Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components 
import Home from '../src/views/Home';

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <div className="views">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
