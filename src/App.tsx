import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { colors } from './styles/colors';
import styled from 'styled-components';

function App() {
  return (
    <ThemeProvider>
      <AppBackground>
        <CenterContainer>
          <Router>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </CenterContainer>
        <ThemeToggle />
      </AppBackground>
    </ThemeProvider>
  );
}

export default App;

const AppBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${colors.gray[50]};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  [data-theme="dark"] & {
    background: ${colors.gray[950]};
  }
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
  min-height: 100vh;
`;
