import { Link } from 'react-router-dom';
import { fmt } from '../data.js';
import { useStore } from '../store.jsx';

export default function Bookings() {
  const { bookings, cancel } = useStore();
  return (
    <>
      <div className="bar"><div className="w"><h1>My Bookings</h1><span className="mu">Review upcoming stays and manage reservations.</span></div></div>
      <div className="w" style={{ marginTop: 24 }}>
        {bookings.length ? bookings.map((b, i) => (
          <div className="box row" style={{ marginBottom: 14, flexWrap: 'wrap' }} key={b.id}>
            <div>
              <b>{b.n}</b> <span className={'st' + (b.cancelled ? ' x' : '')}>{b.cancelled ? 'Cancelled' : 'Confirmed'}</span>
              <div className="mu">{b.id} • {b.room} • {b.nights} nights</div>
            </div>
            <div className="row">
              <b>{fmt(b.total)}</b>
              <Link className="btn o s" to={'/resort/' + b.i}>View Details</Link>
              {!b.cancelled && <button className="btn o s" onClick={() => cancel(i)}>Cancel Booking</button>}
            </div>
          </div>
        )) : (
          <div className="box" style={{ textAlign: 'center', padding: 48 }}>
            <h3>You have no bookings yet</h3>
            <Link className="btn" to="/search">Find a place</Link>
          </div>
        )}
      </div>
    </>
  );
}
