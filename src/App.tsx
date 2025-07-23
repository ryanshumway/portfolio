import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import styled from 'styled-components';

function App() {
  return (
    <AppBackground>
      <CenterContainer>
        <Router>
          
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
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const CenterContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;
