// Version 1

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// Version 2


import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
//import Navbar from './widgets/layout/navbar';
import routes from './routes';
import Navbar from './widgets/layout/navbar';
//import { useAuth } from './contexts/AuthContext';
//import { Category } from '../src/hooks/useCatalogueCategory'

export interface CatalogueQuery {
  //category : Category | null
  occasion : string | null
}

const App: React.FC = () => {
  // const { authState, logout } = useAuth();

  return (
    <>
      <Box>
        {/* <Navbar isAuthenticated={authState.isAuthenticated} onLogout={logout} /> */}
        {/* <Navbar  /> */}
        <Navbar />
        <Routes>
          {routes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;