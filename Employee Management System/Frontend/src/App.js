import { Route, Routes } from 'react-router-dom';
import './App.css';
// Capitalize the import name
import Header from './pages/header/header.js';
import NoMatch from './pages/NoMatch/NoMatch.js';
// Add the missing import for Dashboard
import Dashboard from './pages/Dashboard/dashboard.js';
import PostUser from './pages/employee/PostUser.js';
import UpdateUser from './pages/employee/UpdateUser.js';

function App() {
  return (
    <>
      {/* Use Capitalized Header component */}
      <Header />
      <Routes>
        {/* Use Capitalized Dashboard component */}
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/add' element={<PostUser />}></Route>
        <Route path='/employee/:id' element={<UpdateUser />}></Route>
        <Route path='*' element={<NoMatch />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;