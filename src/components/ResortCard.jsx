import { Link } from 'react-router-dom';
import { R, fmt, photo } from '../data.js';
import { useStore } from '../store.jsx';

export default function ResortCard({ i, list }) {
  const r = R[i];
  const { fav, toggleFav } = useStore();
  const on = fav.includes(i);
  return (
    <div className={'card' + (list ? ' hl' : '')}>
      <div className="im" style={{ background: photo(r.img, r.g), position: 'relative' }}>
        <button className={'heart ' + (on ? 'on' : '')} onClick={() => toggleFav(i)} aria-label="Save">{on ? '♥' : '♡'}</button>
      </div>
      <div className="bd">
        <div className="row"><h3>{r.n}</h3><span className="rt">☆ {r.r}</span></div>
        <div className="mu">⌖ {r.l}</div>
        <div className="tags">{r.t.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        <div className="row mt">
          <div><span className="mu">From / night</span><div className="price">{fmt(r.p)}</div></div>
          <Link className="btn s" to={'/resort/' + i}>View Details</Link>
        </div>
      </div>
    </div>
  );
}
