import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main className='candidate-container'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
