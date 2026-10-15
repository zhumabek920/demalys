import { useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { R, ROOMS, fmt, photo } from '../data.js';
import { useStore } from '../store.jsx';

export default function Details() {
  const id = Number(useParams().id);
  const r = R[id];
  const nav = useNavigate();
  const { fav, toggleFav } = useStore();
  const rooms = useRef(null);
  if (!r) return <div className="ok"><h1>Property not found</h1><Link className="btn" to="/search">Back to search</Link></div>;
  const rev = [...r.g].reverse();

  return (
    <div className="w">
      <div className="mu" style={{ marginTop: 20 }}>
        <Link to="/">Home</Link> / <Link to="/search">Alakol</Link> / {r.n}
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 38 }}>{r.n}</h1>
          <span className="rt">☆ {r.r}</span> <span className="mu">{r.l}</span>
        </div>
        <button className="btn o s" onClick={() => toggleFav(id)}>{fav.includes(id) ? '♥ Saved' : '♡ Save'}</button>
      </div>
      <div className="gal">
        <div style={{ background: photo(r.img, r.g) }} />
        <div className="c">
          <div style={{ background: photo(r.img + '-2', rev) }} />
          <div style={{ background: photo(r.img + '-3', ['#b9772e', '#e8c88a']) }} />
        </div>
      </div>
      <div className="lay b">
        <div>
          <h2 style={{ marginTop: 0 }}>A peaceful lakeside escape</h2>
          <p className="mu">Steps from the healing waters of Lake Alakol, this welcoming resort combines comfort with open views of the Dzungarian Alatau. Private beach, family spaces and local cuisine.</p>
          <div className="tags">{[...r.t, 'Free parking', 'Family friendly'].map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        </div>
        <div className="box">
          <b>Check availability</b>
          <div className="two" style={{ margin: '12px 0' }}>
            <input className="f" type="date" defaultValue="2026-07-10" />
            <input className="f" type="date" defaultValue="2026-07-15" />
          </div>
          <button className="btn" style={{ width: '100%' }} onClick={() => rooms.current.scrollIntoView({ behavior: 'smooth' })}>View available rooms</button>
        </div>
      </div>
      <h2 ref={rooms}>Available rooms</h2>
      <div className="grid">
        {ROOMS.map((m, i) => (
          <div className="card" key={m[0]}>
            <div className="im" style={{ background: photo('room-' + (i + 1), rev), height: 130 }} />
            <div className="bd">
              <h3>{m[0]}</h3>
              <div className="mu">{m[1]}</div>
              <div className="row mt">
                <div className="price">{fmt(m[2])}<br /><span className="mu" style={{ fontWeight: 400, fontSize: 12 }}>per night</span></div>
                <button className="btn s" onClick={() => nav('/booking', { state: { id, room: i } })}>Select Room</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
