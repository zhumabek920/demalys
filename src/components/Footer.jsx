import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="w ff">
        <div>
          <b style={{ fontSize: 18, marginBottom: 2 }}>Demalys.kz</b>
          <span style={{ fontSize: 12 }}>Rest closer to nature, across Kazakhstan.</span>
        </div>
        <nav>
          <Link to="/">About</Link>
          <Link to="/">Help Center</Link>
          <Link to="/register">List your property</Link>
          <Link to="/">Privacy</Link>
        </nav>
        <span style={{ fontSize: 12 }}>© 2026 Demalys.kz</span>
      </div>
    </footer>
  );
}
