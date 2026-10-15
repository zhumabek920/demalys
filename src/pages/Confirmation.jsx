import { Link, Navigate } from 'react-router-dom';
import { fmt } from '../data.js';
import { useStore } from '../store.jsx';

export default function Confirmation() {
  const { bookings } = useStore();
  const b = bookings[bookings.length - 1];
  if (!b) return <Navigate to="/" replace />;
  return (
    <div className="ok">
      <div className="ck">✓</div>
      <h1>Booking Confirmed!</h1>
      <p className="mu">A confirmation was saved to your dashboard.</p>
      <div className="box" style={{ textAlign: 'left' }}>
        <span className="mu">Booking ID</span>
        <div className="price">{b.id}</div>
        <p><b>{b.n}</b><br />{b.room} • {b.nights} nights</p>
        <b>Total {fmt(b.total)}</b>
      </div>
      <div className="row" style={{ justifyContent: 'center', marginTop: 20 }}>
        <Link className="btn" to="/bookings">View My Bookings</Link>
        <Link className="btn o" to="/">Back to Home</Link>
      </div>
    </div>
  );
}
