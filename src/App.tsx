import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import styled from 'styled-components';

function App() {
  return (
    <AppBackground>
      <CenterContainer>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </CenterContainer>
    </AppBackground>
  );
}

export default App;

const AppBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #f9fafb; /* gray.50 */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CenterContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
