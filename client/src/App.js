import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border'>
      <h1>Starter App</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
          <Link to='/home'>Home</Link> - {' '}
          <Link to='/facts'>Facts</Link> - {' '}
          <Link to='/facts/new'>New Facts</Link> - {' '}
          <Link to='/about'>About</Link>
        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;
