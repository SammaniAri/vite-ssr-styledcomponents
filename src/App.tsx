import './App.css'
import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import styled from 'styled-components'

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))
const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`;
function App() {
  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
        >
          <img
            src="/vite.svg"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>         
        <StyledButton>styled components button</StyledButton>
      </div>
    </>
  );
}

export default App
