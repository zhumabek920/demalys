import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../store.jsx';
import logo from '../assets/logo.svg';

export default function Header() {
  const { user, setUser } = useStore();
  const cls = ({ isActive }) => (isActive ? 'on' : '');
  return (
    <header>
      <div className="w">
        <Link className="logo" to="/"><img src={logo} alt="" width="36" height="36" />Demalys.kz</Link>
        <nav>
          <NavLink to="/" end className={cls}>Home</NavLink>
          <NavLink to="/search" className={cls}>Recreation Centers</NavLink>
          <NavLink to="/bookings" className={cls}>My Bookings</NavLink>
        </nav>
        <div className="row" style={{ gap: 10 }}>
          <Link to="/favorites" className="mu" style={{ fontWeight: 500 }}>♡ Favorites</Link>
          {user ? (
            <button className="btn o s" onClick={() => setUser(null)}>Sign Out ({user})</button>
          ) : (
            <Link className="btn o s" to="/login">Sign In</Link>
          )}
          <span className="mu" style={{ fontSize: 13 }}>◍ EN</span>
        </div>
      </div>
    </header>
  );
}
