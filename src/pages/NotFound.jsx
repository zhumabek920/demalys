import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="ok">
      <h1>Page not found</h1>
      <p className="mu">The page you are looking for does not exist.</p>
      <Link className="btn" to="/">Back to Home</Link>
    </div>
  );
}
